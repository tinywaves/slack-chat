import React, { useState, useEffect } from 'react';

interface IIncrementButtonProps {
  number: number;
  condition: boolean;
}

const IncrementButton: React.FC<IIncrementButtonProps> = props => {
  const [count, setCount] = useState({
    number: props.number,
    condition: props.condition
  });

  useEffect(() => {
    document.title = `You clicked ${count.number} times`;
  }, [count.number]);

  return (
    <>
      <h2>count:{count.number}</h2>
      <button
        onClick={() =>
          setCount({
            number: count.number + 1,
            condition: count.condition
          })
        }
        disabled={count.condition}
      >
        Increment
      </button>
    </>
  );
};

export default IncrementButton;
