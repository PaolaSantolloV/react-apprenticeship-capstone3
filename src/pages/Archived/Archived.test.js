import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GlobalContext } from "../../providers/Global/Global.provider";
import ArchivedPage from "./Archived.page";
import { AuthContext } from "../../providers/Auth/Auth.provider";

const contextValueAuth = {
  userData: { user: { uid: "kjdhkd" } },
};

describe("<ArchivedPage />", () => {
  test("should render all notes correctly", () => {
    const contextValueGlobal = {
      archiveNotes: [
        {
          color: "#0077ff",
          id: "-Muh0xRHUL46QtpMkmce",
          note: "notes teste",
          status: true,
        },
      ],
      getNotes: jest.fn(),
      searchTerm: "",
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <ArchivedPage />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const note = getByTitle("-Muh0xRHUL46QtpMkmce");
    expect(note).toBeInTheDocument();
  });

  test("should no render note card correctly", () => {
    const contextValueGlobal = {
      archiveNotes: [],
      getNotes: jest.fn(),
      searchTerm: "",
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <ArchivedPage />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const note = getByTitle("no-notes");
    expect(note).toBeInTheDocument();
  });
});
