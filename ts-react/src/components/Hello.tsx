import React, { useContext } from 'react';

import { ThemeContext } from '../App';

interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = props => {
  const theme = useContext(ThemeContext);

  const style = {
    color: theme.color,
    backgroundColor: theme.background
  };

  return (
    <>
      <h2>{props.message}</h2>
      <p style={style}>
        {theme.color} + {theme.background}
      </p>
    </>
  );
};

Hello.defaultProps = {
  message: 'Hello, Default Props'
};

Hello.displayName = 'TinyRipple';

export default Hello;
