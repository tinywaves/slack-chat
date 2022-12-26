import React, { useEffect, useState } from 'react';

function usePrintLogs(name) {
  useEffect(() => {
    console.log(`${name} component created`);

    return () => {
      console.log(`${name} component destroyed`);
    };
  }, [name]);
}

function ComponentHook() {
  usePrintLogs('ComponentHook');

  return <h2>ComponentHook</h2>;
}

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      {show && <ComponentHook />}
    </div>
  );
}
