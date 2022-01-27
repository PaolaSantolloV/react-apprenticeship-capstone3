import { app } from "../utils/firebaseConfig";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const useSingUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      return error;
    });
};
