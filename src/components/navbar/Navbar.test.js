import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar.component";

const onClick = jest.fn();
const onChange = jest.fn();

describe("navbar", () => {
  test("should render the navbar element correctly", () => {
    const { getByTitle } = render(<Navbar />);
    const nav = getByTitle("navbar");
    expect(nav).toBeInTheDocument();
  });
  test("should render the input and button element on navbar correctly", () => {
    const { getByTitle } = render(
      <Navbar onClick={onClick} onChange={onChange} value={"test"} />
    );
    const nav = getByTitle("navbar");
    const button = getByTitle("button-search");
    const input = getByTitle("search");
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "test input" } });
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
