import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotesPage from "./Notes.page";
import { GlobalContext } from "../../providers/Global/Global.provider";

describe("<NotesPage />", () => {
  test("should render all notes correctly", () => {
    const contextValueGlobal = {
      allNotes: [
        {
          color: "#0077ff",
          id: "-Muh0xRHUL46QtpMkmce",
          note: "notes teste",
          status: true,
        },
      ],
    };
    const { getByTitle } = render(
      <GlobalContext.Provider value={contextValueGlobal}>
        <NotesPage />
      </GlobalContext.Provider>
    );
    const note = getByTitle("-Muh0xRHUL46QtpMkmce");
    expect(note).toBeInTheDocument();
  });

  test("should no render note card correctly", () => {
    const contextValueGlobal = {
      allNotes: [],
    };
    const { getByTitle } = render(
      <GlobalContext.Provider value={contextValueGlobal}>
        <NotesPage />
      </GlobalContext.Provider>
    );
    const note = getByTitle("no-notes");
    expect(note).toBeInTheDocument();
  });
});
