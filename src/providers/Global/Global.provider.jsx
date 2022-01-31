import React, { useState, useContext, useEffect } from "react";
import { useAllNotes } from "../../hooks/useAllNotes";

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isError, setIsError] = useState(false);
  const [allNotes, setAllNotes] = useState({});

  const darkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    useAllNotes()
      .then((data) => {
        const notes = [];
        for (const key in data) {
          const note = {
            id: key,
            ...data[key],
          };
          notes.push(note);
        }
        setAllNotes(notes);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ isDark, darkMode, isError, allNotes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
