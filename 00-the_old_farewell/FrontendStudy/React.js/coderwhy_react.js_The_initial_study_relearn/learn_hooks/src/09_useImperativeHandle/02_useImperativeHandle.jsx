import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const RefComponent = forwardRef((props, ref) => {
  const childInputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        childInputRef.current.focus();
      }
    }),
    []
  );

  return <input ref={childInputRef} type="text" />;
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
