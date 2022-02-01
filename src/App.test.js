import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("shoul render app correctly", () => {
    const { container } = render(<App />);
    expect(container).toBeValid();
  });
});
