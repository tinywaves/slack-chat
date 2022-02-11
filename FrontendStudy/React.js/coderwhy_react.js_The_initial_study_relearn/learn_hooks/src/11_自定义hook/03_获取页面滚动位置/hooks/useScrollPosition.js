import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener('scroll', handleScrollPosition);

    return () => {
      document.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  return scrollPosition;
}
