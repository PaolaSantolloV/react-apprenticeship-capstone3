import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteForm from "./NoteForm.component";

describe("<NoteForm/>", () => {
  test("should render the noteForm correctly", () => {
    const { getByTitle } = render(<NoteForm isArchived={false} />);
    const card = getByTitle("note-form");

    const inputDescription = getByTitle("description-note");
    fireEvent.change(inputDescription, { target: { value: "test input" } });

    const cancel = getByTitle("cancel");
    fireEvent.click(cancel);

    const archive = getByTitle("archive");
    fireEvent.click(archive);

    const save = getByTitle("save");
    fireEvent.click(save);

    expect(cancel).toBeInTheDocument();
    expect(archive).toBeInTheDocument();
    expect(save).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });

  test("should render a archived noteCard correctly", () => {
    const { getByTitle } = render(<NoteForm isArchived={true} />);
    const card = getByTitle("note-form");

    const inputDescription = getByTitle("description-note");
    fireEvent.change(inputDescription, { target: { value: "test input" } });

    const cancel = getByTitle("cancel");
    fireEvent.click(cancel);

    const restore = getByTitle("restore");
    fireEvent.click(restore);

    const save = getByTitle("save");
    fireEvent.click(save);

    expect(cancel).toBeInTheDocument();
    expect(restore).toBeInTheDocument();
    expect(save).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
  });

  test("should render modal noteCard correctly", () => {
    const setShowModal = jest.fn();
    const useShowModal = jest.spyOn(React, "useState");
    useShowModal.mockImplementation([false, setShowModal]);

    const { getByTitle } = render(<NoteForm isArchived={true} show={true} />);
    const modal = getByTitle("modal-note");
    expect(modal).toBeInTheDocument();
  });
});
