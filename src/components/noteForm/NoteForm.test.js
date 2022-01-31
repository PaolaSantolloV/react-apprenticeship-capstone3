import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteForm from "./NoteForm.component";
import { GlobalContext } from "../../providers/Global/Global.provider";

describe("<NoteForm/>", () => {
  test("should render the noteForm correctly", () => {
    const contextValue = {
      loading: jest.fn(),
    };
    const { getByTitle } = render(
      <GlobalContext.Provider value={contextValue}>
        <NoteForm isArchived={false} />
      </GlobalContext.Provider>
    );
    const card = getByTitle("note-form");

    const inputDescription = getByTitle("description-note");
    fireEvent.change(inputDescription, { target: { value: "test input" } });

    const color = getByTitle("color");
    fireEvent.click(color);

    const cancel = getByTitle("cancel");
    fireEvent.click(cancel);

    const save = getByTitle("save");
    fireEvent.click(save);

    expect(cancel).toBeInTheDocument();
    expect(color).toBeInTheDocument();
    expect(save).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });

  test("should render a archived noteCard correctly", () => {
    const contextValue = {
      loading: jest.fn(),
    };
    const { getByTitle } = render(
      <GlobalContext value={contextValue}>
        <NoteForm isArchived={true} />
      </GlobalContext>
    );
    const card = getByTitle("note-form");

    const inputDescription = getByTitle("description-note");
    fireEvent.change(inputDescription, { target: { value: "test input" } });

    const color = getByTitle("color");
    fireEvent.click(color);

    const cancel = getByTitle("cancel");
    fireEvent.click(cancel);

    const restore = getByTitle("restore");
    fireEvent.click(restore);

    const save = getByTitle("save");
    fireEvent.click(save);

    expect(cancel).toBeInTheDocument();
    expect(color).toBeInTheDocument();
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
