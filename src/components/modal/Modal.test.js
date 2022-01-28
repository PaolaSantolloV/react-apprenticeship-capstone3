import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal.component";

describe("<Modal />", () => {
  test("should create the modal element correctly", () => {
    const { getByTitle } = render(<Modal title="test" />);
    const modal = getByTitle("test");
    expect(modal).toBeInTheDocument();
  });

  test("should create the child on modal correctly", () => {
    const { getByTitle } = render(
      <Modal title="test">
        <h1 title="child-test">test</h1>
      </Modal>
    );
    const child = getByTitle("child-test");
    expect(child).toBeInTheDocument();
  });

  test("should create the Modal display-block element correctly", () => {
    const { getByTitle } = render(<Modal title="modal-test" show={true} />);
    const modal = getByTitle("modal-test");
    expect(modal).toBeInTheDocument();
  });

  test("should create the Modal display-none element correctly", () => {
    const { getByTitle } = render(<Modal title="modal-test" show={false} />);
    const modal = getByTitle("modal-test");
    expect(modal).toBeInTheDocument();
  });
});
