import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      setScrollY(window.scrollY);
      rafId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollY;
};