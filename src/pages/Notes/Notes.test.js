import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotesPage from "./Notes.page";
import { GlobalContext } from "../../providers/Global/Global.provider";
import { AuthContext } from "../../providers/Auth/Auth.provider";

describe("<NotesPage />", () => {
  test("should render all notes correctly", () => {
    const contextValueGlobal = {
      searchTerm: "",
      activeNotes: [
        {
          color: "#0077ff",
          id: "-Muh0xRHUL46QtpMkmce",
          note: "notes teste",
          status: true,
        },
      ],
      getNotes: jest.fn(),
    };
    const contextValueAuth = {
      userData: { user: { uid: "kjdhkd" } },
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <NotesPage />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const note = getByTitle("-Muh0xRHUL46QtpMkmce");
    expect(note).toBeInTheDocument();
  });

  test("should no render note card correctly", () => {
    const contextValueGlobal = {
      activeNotes: [],
      searchTerm: "",
      getNotes: jest.fn(),
    };
    const contextValueAuth = {
      userData: { user: { uid: "kjdhkd" } },
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <NotesPage />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const note = getByTitle("no-notes");
    expect(note).toBeInTheDocument();
  });
});
