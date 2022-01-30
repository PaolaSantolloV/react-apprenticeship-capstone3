import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";

describe("<Menu />", () => {
  test("should create the menu element correctly", () => {
    const contextValue = {
      authed: true,
    };
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <Menu />
      </AuthContext.Provider>
    );
    const layout = getByTitle("menu");
    expect(layout).toBeInTheDocument();
  });
});
