import React, { useState, useContext } from "react";

export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [authed, setAuthed] = useState(false);

  const logout = () => {
    setAuthed(false);
    setUserData(null);
  };

  const login = (data) => {
    setAuthed(true);
    setUserData(data);
  };

  return (
    <AuthContext.Provider value={{ authed, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
