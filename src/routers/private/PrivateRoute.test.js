import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrivateRoute from "./PrivateRoute.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { MemoryRouter } from "react-router-dom";
import NotesPage from "../../pages/Notes/Notes.page";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Out here</span>,
}));

describe("<PrivateRoute>", () => {
  test("should render the page if authed", () => {
    const contextValue = {
      authed: true,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <NotesPage />
          </PrivateRoute>
        </MemoryRouter>
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
          <PrivateRoute></PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const redirect = getByText("Out here");
    expect(redirect).toBeInTheDocument();
  });
});
