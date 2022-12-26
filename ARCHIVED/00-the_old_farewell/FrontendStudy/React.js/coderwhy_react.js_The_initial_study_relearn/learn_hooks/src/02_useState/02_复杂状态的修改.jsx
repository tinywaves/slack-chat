import React, { useState } from 'react';

export default function App() {
  const [list, setList] = useState(['default1', 'default2']);
  const [persons, setPersons] = useState([
    { name: 'tinyRipple', count: 1 },
    { name: 'ZDH', count: 2 }
  ]);

  function countIncrement(index) {
    const newPersons = [...persons];
    newPersons[index].count += 1;
    setPersons(newPersons);
  }

  return (
    <>
      <ul>
        {
          list.map(item => {
            return <li>{item}</li>;
          })
        }
      </ul>
      {/* 对原数组、对象进行拷贝，对新数组、对象进行修改并将新的数组、对象传入 set 函数 */}
      <button onClick={() => setList([...list, 'add item'])}>add list item</button>
      <ul>
        {
          persons.map((item, index) => {
            return (
              <div>
                {item.name}---{item.count}
                <button onClick={() => countIncrement(index)}>+1</button>
              </div>
            );
          })
        }
      </ul>
    </>
  );
}
