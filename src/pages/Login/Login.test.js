import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "./Login.page";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../providers/Auth/Auth.provider";

describe("<LoginPage />", () => {
  test("should render login page correctly", () => {
    const contextValue = {
      authed: false,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const page = getByTitle("login-page");
    expect(page).toBeInTheDocument();
  });
});
