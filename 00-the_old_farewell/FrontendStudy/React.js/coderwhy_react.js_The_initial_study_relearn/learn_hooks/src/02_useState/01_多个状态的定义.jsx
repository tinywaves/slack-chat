import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('default-name');
  const [list, setList] = useState(['default1', 'default2']);

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {
          list.map(item => {
            return <li>{item}</li>;
          })
        }
      </ul>
    </>
  );
}
