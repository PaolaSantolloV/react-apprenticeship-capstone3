import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import SignUpPage from "./SignUp.page";

describe("<SignUpPage />", () => {
  test("should render sign up page correctly", () => {
    const contextValue = {
      authed: false,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <SignUpPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const page = getByTitle("sign-up-page");
    expect(page).toBeInTheDocument();
  });
});
