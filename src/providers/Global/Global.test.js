import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { GlobalContext, GlobalProvider } from "./Global.provider";

describe("AuthProvider", () => {
  it("isDark is false by default", async () => {
    await act(async () =>
      render(
        <GlobalProvider>
          <GlobalContext.Consumer>
            {(value) => <span>Is dark mode: {value.isDark.toString()}</span>}
          </GlobalContext.Consumer>
        </GlobalProvider>
      )
    );

    expect(screen.getByText("Is dark mode: false")).toBeTruthy();
  });

  it("sets isDark to true", async () => {
    await act(async () =>
      render(
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
      )
    );

    fireEvent.click(screen.getByText("DarkMode"));

    expect(screen.getByText("Is darkMode in: true")).toBeTruthy();
  });
});
