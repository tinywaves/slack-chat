import React from 'react';

import useScrollPosition from './hooks/useScrollPosition';

export default function App() {
  const scrollPosition = useScrollPosition();

  return (
    <div style={{ padding: '500px 0' }}>
      <h2 style={{ position: 'fixed', left: '20px', top: 0 }}>
        scrollPosition: {scrollPosition}
      </h2>
    </div>
  );
}
