/**
 * Client-side module to fix navigation and scrolling issues
 * This module runs on every page load
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Function to handle smooth scrolling to anchors
  function scrollToAnchor(targetId, offset = 152) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
      return true;
    }
    return false;
  }

  // Function to fix sidebar navigation
  function fixSidebarNavigation() {
    // Handle sidebar links
    const handleSidebarClick = (event) => {
      const link = event.target.closest('a[href*="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.includes('#')) {
          const targetId = href.split('#')[1];
          
          // Check if it's an anchor on the current page
          if (href.startsWith('#') || href.includes(window.location.pathname)) {
            event.preventDefault();
            event.stopPropagation();
            
            if (scrollToAnchor(targetId)) {
              // Update URL without navigation
              const newUrl = window.location.pathname + '#' + targetId;
              window.history.pushState(null, null, newUrl);
            }
          }
        }
      }
    };

    // Add event delegation for sidebar
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (sidebar) {
      sidebar.removeEventListener('click', handleSidebarClick);
      sidebar.addEventListener('click', handleSidebarClick);
    }

    // Also handle direct anchor links in content
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (link) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToAnchor(targetId);
        window.history.pushState(null, null, '#' + targetId);
      }
    });
  }

  // Function to handle hash changes and initial page load
  function handleHashNavigation() {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const targetId = hash.substring(1);
        scrollToAnchor(targetId);
      }, 300); // Delay to ensure page is fully loaded
    }
  }

  // Initialize when DOM is ready
  function initialize() {
    fixSidebarNavigation();
    handleHashNavigation();
    
    // Handle browser back/forward with hash
    window.addEventListener('hashchange', handleHashNavigation);
    
    // Re-initialize when new content is loaded (for SPA navigation)
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        fixSidebarNavigation();
        handleHashNavigation();
      }, 100);
    });

    // Observe the main content area
    const mainContent = document.querySelector('main') || document.body;
    observer.observe(mainContent, {
      childList: true,
      subtree: true
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
}
