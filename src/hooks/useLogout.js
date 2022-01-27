import { app } from "../utils/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

export const useLogout = () => {
  const auth = getAuth(app);
  signOut(auth);
};
