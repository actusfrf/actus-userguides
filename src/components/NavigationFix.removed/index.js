/**
 * Navigation Fix Component
 * Handles proper scrolling behavior and sidebar stability
 */

import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function NavigationFix() {
  const location = useLocation();

  useEffect(() => {
    // Function to handle smooth scrolling to anchors
    const handleAnchorScroll = () => {
      const hash = location.hash;
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 120;
            const offset = navbarHeight + 32; // Extra padding
            const elementPosition = element.offsetTop - offset;
            
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Handle initial page load
    handleAnchorScroll();

    // Function to fix sidebar link behavior
    const fixSidebarLinks = () => {
      const sidebarLinks = document.querySelectorAll('.menu__link[href*="#"]');
      
      sidebarLinks.forEach(link => {
        // Remove any existing click handlers to avoid duplicates
        link.removeEventListener('click', handleLinkClick);
        link.addEventListener('click', handleLinkClick);
      });
    };

    // Custom click handler for sidebar links
    const handleLinkClick = (event) => {
      const href = event.target.getAttribute('href');
      if (href && href.includes('#')) {
        event.preventDefault();
        
        const targetId = href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 120;
          const offset = navbarHeight + 32;
          const elementPosition = targetElement.offsetTop - offset;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          
          // Update URL without triggering navigation
          window.history.pushState(null, null, href);
        }
      }
    };

    // Apply fixes after DOM is loaded
    const applyFixes = () => {
      fixSidebarLinks();
      
      // Also handle direct anchor links in content
      const anchorLinks = document.querySelectorAll('a[href*="#"]');
      anchorLinks.forEach(link => {
        if (link.hostname === window.location.hostname) {
          link.removeEventListener('click', handleLinkClick);
          link.addEventListener('click', handleLinkClick);
        }
      });
    };

    // Apply fixes on initial load
    setTimeout(applyFixes, 500);

    // Reapply fixes when route changes
    const observer = new MutationObserver(() => {
      setTimeout(applyFixes, 100);
    });

    // Observe changes in the sidebar
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (sidebar) {
      observer.observe(sidebar, {
        childList: true,
        subtree: true
      });
    }

    // Cleanup
    return () => {
      observer.disconnect();
      const links = document.querySelectorAll('.menu__link[href*="#"], a[href*="#"]');
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [location]);

  // This component doesn't render anything
  return null;
}
