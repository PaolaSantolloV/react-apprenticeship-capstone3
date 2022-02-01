import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteCard from "./NoteCard.component";

describe("<NoteCard/>", () => {
  test("should render the noteCard correctly", () => {
    const { getByTitle } = render(<NoteCard />);
    const color = getByTitle("selected-color");
    const text = getByTitle("note-text");
    expect(color).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
