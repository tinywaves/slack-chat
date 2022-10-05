import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
  const [pointer, setPointer] = useState({ pointerX: 0, pointerY: 0 });

  useEffect(() => {
    const updateMouseData = (e: MouseEvent) => {
      setPointer({ pointerX: e.clientX, pointerY: e.clientY });
    };

    document.addEventListener('click', updateMouseData);

    return () => {
      document.removeEventListener('click', updateMouseData);
    };
  }, []);

  return (
    <h2>
      X: {pointer.pointerX}, Y: {pointer.pointerY}
    </h2>
  );
};

export default MouseTracker;
