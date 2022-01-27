import React from "react";
import { render } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./Auth.provider";

const mockGetAuth = {
  accessToken: "eyJhbGciOiJ",
  displayName: null,
  email: "paola@gmail.com",
  emailVerified: false,
  isAnonymous: false,
  honeNumber: null,
  providerId: "firebase",
  uid: "fiBjm1jd7wZwqbbnUxBpiV8VyFU2",
};
// const mockGetAuth = jest.fn();

jest.mock("firebase/auth", () => {
  return {
    getAuth: () => mockGetAuth,
  };
});

describe("AuthProvider", () => {
  // it("authed is false by default", () => {
  //   const { container } = render(
  //     <AuthProvider>
  //       <AuthContext.Consumer></AuthContext.Consumer>
  //     </AuthProvider>
  //   );

  //   expect(container).toBeValid();
  // });
});
