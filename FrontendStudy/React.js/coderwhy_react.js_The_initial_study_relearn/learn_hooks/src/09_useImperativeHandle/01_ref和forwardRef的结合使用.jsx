import React, { forwardRef, useRef } from 'react';

const RefComponent = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});

export default function App() {
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = 'tinyRipple';
  }

  return (
    <div>
      <RefComponent ref={inputRef} />
      <button onClick={() => focus()}>focus input</button>
    </div>
  );
}
