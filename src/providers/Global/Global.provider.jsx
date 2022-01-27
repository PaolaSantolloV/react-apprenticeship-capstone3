import React, { useState, useContext } from "react";

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const darkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <GlobalContext.Provider value={{ isDark, darkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
