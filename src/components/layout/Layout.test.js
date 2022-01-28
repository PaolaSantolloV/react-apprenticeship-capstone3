import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout.component";

describe("<Layout />", () => {
  test("should create the layout element correctly", () => {
    const { getByTitle } = render(<Layout />);
    const layout = getByTitle("layout");
    expect(layout).toBeInTheDocument();
  });

  test("should render layout children correctly", () => {
    const { getByTitle } = render(
      <Layout>
        <h1 title="test">Test</h1>
      </Layout>
    );
    const child = getByTitle("test");
    expect(child).toBeInTheDocument();
  });
});
