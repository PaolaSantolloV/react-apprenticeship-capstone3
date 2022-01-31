import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { GlobalContext } from "../../providers/Global/Global.provider";

describe("<Menu />", () => {
  test("should create the menu element correctly", () => {
    const contextValue = {
      authed: true,
    };
    const contextValueGlobal = {
      isDark: true,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <Menu />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const layout = getByTitle("menu");
    expect(layout).toBeInTheDocument();
  });
});
