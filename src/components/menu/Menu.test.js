import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu.component";

describe("<Menu />", () => {
  test("should create the menu element correctly", () => {
    const { getByTitle } = render(<Menu />);
    const layout = getByTitle("menu");
    expect(layout).toBeInTheDocument();
  });
});
