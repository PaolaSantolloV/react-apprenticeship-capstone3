import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { GlobalContext } from "../../providers/Global/Global.provider";

// const onClick = jest.fn();
// const onChange = jest.fn();
const contextValue = {
  authed: true,
  userData: { user: { uid: "kjdhkd" } },
};
const contextValueGlobal = {
  isDark: false,
};

describe("navbar", () => {
  test("should render the navbar element correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <Navbar />
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const nav = getByTitle("navbar");
    expect(nav).toBeInTheDocument();
  });
  // test("should render the input and button element on navbar correctly", () => {
  //   const { getByTitle } = render(
  //     <AuthContext.Provider value={contextValue}>
  //       <Navbar onClick={onClick} onChange={onChange} value={"test"} />
  //     </AuthContext.Provider>
  //   );
  //   const nav = getByTitle("navbar");
  //   const button = getByTitle("button-search");
  //   const input = getByTitle("search");
  //   fireEvent.click(button);
  //   fireEvent.change(input, { target: { value: "test input" } });
  //   expect(button).toBeInTheDocument();
  //   expect(input).toBeInTheDocument();
  //   expect(nav).toBeInTheDocument();
  // });
});
