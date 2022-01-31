import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrivateRoute from "./PrivateRoute.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { MemoryRouter } from "react-router-dom";
import NotesPage from "../../pages/Notes/Notes.page";
import { GlobalContext } from "../../providers/Global/Global.provider";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Out here</span>,
}));

describe("<PrivateRoute>", () => {
  test("should render the page if authed", () => {
    const contextValue = {
      authed: true,
      userData: { user: { uid: "kjdhkd" } },
    };
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
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <MemoryRouter>
            <PrivateRoute>
              <NotesPage />
            </PrivateRoute>
          </MemoryRouter>
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const notesPage = getByTitle("notes");
    expect(notesPage).toBeInTheDocument();
  });

  test("should render the login if isn't authed", () => {
    const contextValue = {
      authed: false,
    };
    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const redirect = getByText("Out here");
    expect(redirect).toBeInTheDocument();
  });
});
