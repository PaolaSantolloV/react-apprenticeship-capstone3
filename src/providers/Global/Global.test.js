import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { GlobalContext, GlobalProvider } from "./Global.provider";

describe("AuthProvider", () => {
  it("isDark is false by default", () => {
    const { getByText } = render(
      <GlobalProvider>
        <GlobalContext.Consumer>
          {(value) => <span>Is dark mode: {value.isDark.toString()}</span>}
        </GlobalContext.Consumer>
      </GlobalProvider>
    );

    expect(getByText("Is dark mode: false")).toBeTruthy();
  });

  it("sets isDark to true", () => {
    const { getByText } = render(
      <GlobalProvider>
        <GlobalContext.Consumer>
          {(value) => (
            <>
              <span>Is darkMode in: {value.isDark.toString()}</span>
              <button onClick={value.darkMode}>DarkMode</button>
            </>
          )}
        </GlobalContext.Consumer>
      </GlobalProvider>
    );

    fireEvent.click(getByText("DarkMode"));

    expect(getByText("Is darkMode in: true")).toBeTruthy();
  });
});
