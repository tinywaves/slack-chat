import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [pointer, setPointer] = useState({ pointerX: 0, pointerY: 0 });

  useEffect(() => {
    const updateMouseData = (e: MouseEvent) => {
      setPointer({ pointerX: e.clientX, pointerY: e.clientY });
    };

    document.addEventListener('mousemove', updateMouseData);

    return () => {
      document.removeEventListener('mousemove', updateMouseData);
    };
  }, []);

  return pointer;
};

export default useMousePosition;
