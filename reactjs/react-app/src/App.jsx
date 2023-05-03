import { useCallback, useState, useContext } from 'react';

import ThemeContext from './contexts/theme';

const Component1 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div style={{ background: themeContext === 'light' ? '#fff' : '#666' }}>
        Component1
      </div>
      <hr />
    </>
  );
};

const Component2 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div style={{ background: themeContext === 'light' ? '#fff' : '#666' }}>
        Component2
      </div>
      <hr />
    </>
  );
};

const Component3 = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div style={{ background: themeContext === 'light' ? '#fff' : '#666' }}>
        Component3
      </div>
      <hr />
    </>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = useCallback(
    () => setTheme((pre) => (pre === 'light' ? 'dark' : 'light')),
    []
  );

  return (
    <ThemeContext.Provider value={theme}>
      <Component1 />
      <Component2 />
      <Component3 />
      <button onClick={changeTheme}>change theme</button>
    </ThemeContext.Provider>
  );
};

export default App;
