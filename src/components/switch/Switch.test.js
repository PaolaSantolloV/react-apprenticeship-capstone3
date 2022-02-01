import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Switch from "./Switch.component";

describe("<Switch>", () => {
  test("should create the Switch element correctly", () => {
    const { getByTitle } = render(<Switch />);
    const comSwitch = getByTitle("switch");
    expect(comSwitch).toBeInTheDocument();
  });

  test("should create the Switch element correctly with label", () => {
    const { getByTitle } = render(<Switch label="test" />);
    const comSwitch = getByTitle("switch");
    const label = getByTitle("label");
    expect(label).toBeInTheDocument();
    expect(comSwitch).toBeInTheDocument();
  });
});
