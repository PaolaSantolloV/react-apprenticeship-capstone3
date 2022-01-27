import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthContext } from "../providers/Auth/Auth.provider";
import AppRouter from "./AppRouter.component";

describe("<AppRouter>", () => {
  test("sould render loginPage if isn't authed", () => {
    const contextValue = {
      authed: false,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    const loginPage = getByTitle("login");
    expect(loginPage).toBeInTheDocument();
  });

  test("sould render notesPage if is authed", () => {
    const contextValue = {
      authed: true,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    const notesPage = getByTitle("notes");
    expect(notesPage).toBeInTheDocument();
  });
});
