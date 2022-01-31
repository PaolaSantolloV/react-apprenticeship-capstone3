import React, { useState, useContext, useEffect } from "react";
import { useAllNotes } from "../../hooks/useAllNotes";
import { useAuthContext } from "../Auth/Auth.provider";

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const { userData } = useAuthContext();
  const [isDark, setIsDark] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeNotes, setActiveNotes] = useState({});
  const [archiveNotes, setArchiveNotes] = useState({});

  const darkMode = () => {
    setIsDark(!isDark);
  };

  const loading = (value) => {
    setIsLoading(value);
  };

  useEffect(() => {
    useAllNotes()
      .then((data) => {
        const notesActive = [];
        const notesArchive = [];
        for (const key in data) {
          const note = {
            id: key,
            ...data[key],
          };
          if (
            data[key].status === true &&
            data[key].idUser === userData.user.uid
          ) {
            notesActive.push(note);
          } else if (
            data[key].status === false &&
            data[key].idUser === userData.user.uid
          ) {
            notesArchive.push(note);
          }
        }
        setActiveNotes(notesActive);
        setArchiveNotes(notesArchive);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [isLoading]);

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        darkMode,
        isError,
        activeNotes,
        archiveNotes,
        isLoading,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
