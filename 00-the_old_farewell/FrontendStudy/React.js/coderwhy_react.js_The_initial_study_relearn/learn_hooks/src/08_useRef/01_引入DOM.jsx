import React, { useRef } from 'react';

export default function App() {
  const h2Ref = useRef();
  const inputRef = useRef();

  function changeRef() {
    h2Ref.current.innerHTML = 'Hello useRef';
    inputRef.current.focus();
  }

  return (
    <>
      <h2 ref={h2Ref}>app</h2>
      <input ref={inputRef} type="text" name="" id="" />
      <button onClick={() => changeRef()}>change ref</button>
    </>
  );
}
