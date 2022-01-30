import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from "./IconButton.component";

const onClick = jest.fn();

describe("<IconButton/>", () => {
  test("should create the icon button element correctly", () => {
    const { getByRole } = render(<IconButton title="test" />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should click in the icon button element correctly", () => {
    const { getByRole } = render(<IconButton title="test" onClick={onClick} />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should click in the icon button with text element correctly", () => {
    const { getByRole, getByTitle } = render(
      <IconButton title="test" onClick={onClick} text="test" />
    );
    const button = getByRole("button");
    const text = getByTitle("icon-text");
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
