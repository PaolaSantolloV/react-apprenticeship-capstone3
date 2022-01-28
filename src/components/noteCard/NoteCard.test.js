import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteCard from "./NoteCard.component";

describe("<NoteCard/>", () => {
  test("should render the noteCard correctly", () => {
    const { getByTitle } = render(
      <NoteCard title="test-notecard" isArchived={false} />
    );
    const card = getByTitle("test-notecard");

    const input = getByTitle("title-note");
    fireEvent.change(input, { target: { value: "test input" } });

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
    expect(input).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });

  test("should render a archived noteCard correctly", () => {
    const { getByTitle } = render(
      <NoteCard title="test-notecard" isArchived={true} />
    );
    const card = getByTitle("test-notecard");

    const input = getByTitle("title-note");
    fireEvent.change(input, { target: { value: "test input" } });

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
    expect(input).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
  });

  test("should render modal noteCard correctly", () => {
    const setShowModal = jest.fn();
    const useShowModal = jest.spyOn(React, "useState");
    useShowModal.mockImplementation([false, setShowModal]);

    const { getByTitle } = render(
      <NoteCard title="test-notecard" isArchived={true} show={true} />
    );
    const modal = getByTitle("modal-note");
    expect(modal).toBeInTheDocument();
  });
});
