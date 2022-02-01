import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input.component";

const onChange = jest.fn();

describe("<Input>", () => {
  test("should create the input type text element correctly", () => {
    const { getByRole } = render(
      <Input
        className="input"
        placeholder="test"
        id="test"
        type="text"
        onChange={onChange}
        value="test"
        title="test"
      />
    );
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("should create the input type password element correctly", () => {
    const { getByTitle } = render(
      <Input
        className="input"
        placeholder="test"
        id="test"
        type="password"
        onChange={onChange}
        value="test"
        title="test"
      />
    );
    const input = getByTitle("test");
    expect(input).toHaveAttribute("type", "password");
    expect(input).toBeInTheDocument();
  });
});
