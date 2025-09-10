import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // if there is a hash, scroll to the element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    } else {
      // otherwise, scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
