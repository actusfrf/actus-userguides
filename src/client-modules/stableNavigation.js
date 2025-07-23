/**
 * Stable Navigation Module for ACTUS Documentation
 * 
 * This module ensures:
 * 1. Document titles are always visible
 * 2. Sidebar remains stable during navigation
 * 3. Content is properly displayed with headings
 * 4. No content or functionality is affected
 */

function ensureDocumentTitleVisibility() {
  // Find and ensure all document titles (h1) are visible
  const documentTitles = document.querySelectorAll('.theme-doc-markdown h1');
  documentTitles.forEach(title => {
    if (title) {
      title.style.display = 'block';
      title.style.visibility = 'visible';
      title.style.opacity = '1';
    }
  });

  // Also check for page titles that might be hidden
  const pageTitles = document.querySelectorAll('h1');
  pageTitles.forEach(title => {
    if (title && title.closest('.theme-doc-markdown')) {
      title.style.display = 'block';
      title.style.visibility = 'visible';
      title.style.opacity = '1';
    }
  });
}

function stabilizeSidebar() {
  const sidebar = document.querySelector('.theme-doc-sidebar-container');
  if (sidebar) {
    // Apply stable positioning
    sidebar.style.position = 'sticky';
    sidebar.style.top = '120px'; // Match navbar height
    sidebar.style.width = '300px';
    sidebar.style.flexShrink = '0';
    sidebar.style.height = 'calc(100vh - 120px)';
    sidebar.style.overflowY = 'auto';
  }

  // Ensure sidebar menu doesn't cause jumps
  const sidebarMenu = document.querySelector('.theme-doc-sidebar-menu');
  if (sidebarMenu) {
    sidebarMenu.style.padding = '1rem';
    sidebarMenu.style.minHeight = '100%';
  }
}

function fixTOCNavigation() {
  // Handle TOC (Table of Contents) clicks in right sidebar
  const tocContainer = document.querySelector('.table-of-contents');
  if (tocContainer) {
    // Ensure TOC container doesn't scroll
    tocContainer.style.overflow = 'visible';
    tocContainer.style.maxHeight = 'none';
    
    // Find the TOC desktop container and stabilize it
    const tocDesktop = document.querySelector('.theme-doc-toc-desktop');
    if (tocDesktop) {
      tocDesktop.style.position = 'sticky';
      tocDesktop.style.flexShrink = '0';
      tocDesktop.style.width = '240px';
    }
    
    // Add click handler for TOC links
    tocContainer.addEventListener('click', function(e) {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculate scroll position with navbar offset
          const navbarHeight = 120; // Match your navbar height
          const extraPadding = 20;  // Additional padding for better visibility
          const totalOffset = navbarHeight + extraPadding;
          
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - totalOffset;
          
          // Smooth scroll ONLY the main content, not the TOC
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL hash without causing jump
          if (history.pushState) {
            history.pushState(null, null, '#' + targetId);
          }
          
          // Ensure TOC container remains stable after click
          setTimeout(() => {
            if (tocContainer) {
              tocContainer.style.overflow = 'visible';
              tocContainer.style.maxHeight = 'none';
            }
            if (tocDesktop) {
              tocDesktop.style.position = 'sticky';
              tocDesktop.style.flexShrink = '0';
            }
          }, 100);
        }
      }
    });
  }
}

function fixMainContentLayout() {
  // Ensure main wrapper is stable
  const mainWrapper = document.querySelector('.main-wrapper');
  if (mainWrapper) {
    mainWrapper.style.display = 'flex';
    mainWrapper.style.flex = '1 0 auto';
    mainWrapper.style.maxWidth = '100%';
  }

  // Fix document container
  const docMainContainer = document.querySelector('.docMainContainer');
  if (docMainContainer) {
    docMainContainer.style.flex = '1';
    docMainContainer.style.minWidth = '0';
  }

  // Ensure markdown content is properly displayed
  const markdownContent = document.querySelector('.theme-doc-markdown');
  if (markdownContent) {
    markdownContent.style.flex = '1';
    markdownContent.style.maxWidth = 'none';
  }
}

function handleContentChanges() {
  // Run all fixes when content changes
  ensureDocumentTitleVisibility();
  stabilizeSidebar();
  fixMainContentLayout();
  fixTOCNavigation();
}

function initializeStableNavigation() {
  // Initial setup
  handleContentChanges();

  // Create observer to handle dynamic content changes
  const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    
    mutations.forEach((mutation) => {
      // Check if new content was added
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if it's content-related
            if (node.classList && (
              node.classList.contains('theme-doc-markdown') ||
              node.classList.contains('theme-doc-sidebar-container') ||
              node.querySelector && (
                node.querySelector('.theme-doc-markdown') ||
                node.querySelector('.theme-doc-sidebar-container')
              )
            )) {
              shouldUpdate = true;
            }
          }
        });
      }
    });

    if (shouldUpdate) {
      // Small delay to ensure DOM is fully updated
      setTimeout(handleContentChanges, 100);
    }
  });

  // Observe changes in the main content areas
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false
  });

  // Handle route changes (for single-page app navigation)
  let currentPath = window.location.pathname;
  const checkForRouteChange = () => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      setTimeout(handleContentChanges, 200); // Small delay for content to load
    }
  };

  // Check for route changes periodically
  setInterval(checkForRouteChange, 500);

  // Also handle popstate events (browser back/forward)
  window.addEventListener('popstate', () => {
    setTimeout(handleContentChanges, 200);
  });

  console.log('Stable Navigation initialized - sidebar and content fixes applied');
}

// Initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeStableNavigation);
  } else {
    initializeStableNavigation();
  }
}

// Export for Docusaurus client modules
export default function() {
  initializeStableNavigation();
}