import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteForm from "./NoteForm.component";
import { GlobalContext } from "../../providers/Global/Global.provider";
import { AuthContext } from "../../providers/Auth/Auth.provider";

describe("<NoteForm/>", () => {
  test("should render the noteForm correctly", () => {
    const contextValue = {
      loading: jest.fn(),
    };
    const contextValueAuth = {
      authed: true,
      userData: { user: { uid: "kjdhkd" } },
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValue}>
          <NoteForm isArchived={false} />
        </GlobalContext.Provider>
      </AuthContext.Provider>
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
    const contextValueAuth = {
      authed: true,
      userData: { user: { uid: "kjdhkd" } },
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValue}>
          <NoteForm isArchived={true} />
        </GlobalContext.Provider>
      </AuthContext.Provider>
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
    expect(card).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
  });

  test("should render modal noteCard correctly", () => {
    const setShowModal = jest.fn();
    const useShowModal = jest.spyOn(React, "useState");
    useShowModal.mockImplementation([false, setShowModal]);

    const contextValue = {
      loading: jest.fn(),
    };
    const contextValueAuth = {
      authed: true,
      userData: { user: { uid: "kjdhkd" } },
    };

    const { getByTitle } = render(
      <AuthContext.Provider value={contextValueAuth}>
        <GlobalContext.Provider value={contextValue}>
          <NoteForm isArchived={true} show={true} />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const modal = getByTitle("modal-note");
    expect(modal).toBeInTheDocument();
  });
});
