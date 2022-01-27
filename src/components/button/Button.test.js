import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button.component";

const onClick = jest.fn();

describe("<Button>", () => {
  test("should create the root button element correctly", () => {
    const { getByRole } = render(<Button title="test" label="test" />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should create the root button element with click correctly", () => {
    const { getByRole } = render(
      <Button title="test" label="test" onClick={onClick} />
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
