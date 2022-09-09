import React, { createContext, useContext } from 'react';

const UserContext = createContext();
const ThemeContext = createContext();

function ConsumerComponent() {
  const userValue = useContext(UserContext);
  const themeValue = useContext(ThemeContext);

  return (
    <>
      <h2>UserContext</h2>
      <li>{userValue.name}</li>
      <li>{userValue.id}</li>
      <h2>ThemeContext</h2>
      <li>{themeValue.color}</li>
    </>
  );
}

export default function App() {
  return (
    <UserContext.Provider value={{ name: 'ZDH', id: 111 }}>
      <ThemeContext.Provider value={{ color: 'red' }}>
        <ConsumerComponent />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
