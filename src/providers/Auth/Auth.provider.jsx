import React, { useState, useContext, useEffect } from "react";
import { app, auth } from "../../utils/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();
function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    getAuth(app);
    onAuthStateChanged(auth, (user) => {
      setUserData(user);
      if (user) {
        setAuthed(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authed, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext };
export default AuthProvider;
