import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { GlobalContext } from "../../providers/Global/Global.provider";

const contextValue = {
  authed: true,
  userData: { user: { uid: "kjdhkd" } },
};
const contextValueGlobal = {
  isDark: false,
};

describe("<Layout />", () => {
  test("should create the layout element correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <Layout />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const layout = getByTitle("layout");
    expect(layout).toBeInTheDocument();
  });

  test("should render layout children correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <Layout>
            <h1 title="test">Test</h1>
          </Layout>
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const child = getByTitle("test");
    expect(child).toBeInTheDocument();
  });
});
