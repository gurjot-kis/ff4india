import { useCallback, useEffect, useState } from 'react';

export function useScrollToTop(threshold = 200) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > threshold);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { showButton, scrollToTop };
}