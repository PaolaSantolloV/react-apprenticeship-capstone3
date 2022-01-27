import { app } from "../utils/firebaseConfig";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const useSignUp = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    return err;
  }
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //     return user;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
};
