import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PublicRoute from "./PublicRoute.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../../pages/Login/Login.page";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>redirect</span>,
}));

describe("<PublicRoute>", () => {
  test("should render the page if isn't authed", () => {
    const contextValue = {
      authed: false,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const loginPage = getByTitle("login");
    expect(loginPage).toBeInTheDocument();
  });

  test("should render the login if is authed", () => {
    const contextValue = {
      authed: true,
    };
    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PublicRoute></PublicRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const redirect = getByText("redirect");
    expect(redirect).toBeInTheDocument();
  });
});
