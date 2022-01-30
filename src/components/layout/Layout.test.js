import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";

const contextValue = {
  authed: true,
};

describe("<Layout />", () => {
  test("should create the layout element correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <Layout />
      </AuthContext.Provider>
    );
    const layout = getByTitle("layout");
    expect(layout).toBeInTheDocument();
  });

  test("should render layout children correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <Layout>
          <h1 title="test">Test</h1>
        </Layout>
      </AuthContext.Provider>
    );
    const child = getByTitle("test");
    expect(child).toBeInTheDocument();
  });
});
