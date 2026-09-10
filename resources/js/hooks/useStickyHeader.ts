import { useEffect, useState } from 'react';

/**
 * Replaces the jQuery `$(window).on('scroll', ...)` sticky-header snippet.
 *
 * Usage:
 *   const isSticky = useStickyHeader();
 *   <header className={`site-header${isSticky ? ' navbar-sticky' : ''}`}>
 */
export function useStickyHeader(threshold = 50) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > threshold);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isSticky;
}