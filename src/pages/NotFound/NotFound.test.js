import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFoundPage from "./NotFound.page";

describe("<NotFoundPage>", () => {
  test("should create the NotFound Page correctly", () => {
    const { getByTitle } = render(<NotFoundPage />);
    const text = getByTitle("title");
    expect(text).toBeInTheDocument();
  });
});
