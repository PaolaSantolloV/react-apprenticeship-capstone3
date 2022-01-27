import { app } from "../utils/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

export const useLogout = () => {
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      const response = {
        successful: true,
      };
      return response;
    })
    .catch((error) => {
      return error;
    });
};
