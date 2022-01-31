import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthContext } from "../providers/Auth/Auth.provider";
import AppRouter from "./AppRouter.component";
import { GlobalContext } from "../providers/Global/Global.provider";

const contextValueGlobal = {
  activeNotes: [
    {
      color: "#0077ff",
      id: "-Muh0xRHUL46QtpMkmce",
      note: "notes teste",
      status: true,
    },
  ],
};

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
    const loginPage = getByTitle("login-page");
    expect(loginPage).toBeInTheDocument();
  });

  test("sould render notesPage if is authed", () => {
    const contextValue = {
      authed: true,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <AppRouter />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const notesPage = getByTitle("notes");
    expect(notesPage).toBeInTheDocument();
  });
});
