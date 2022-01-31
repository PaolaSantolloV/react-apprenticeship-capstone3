import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { GlobalContext, GlobalProvider } from "./Global.provider";
import { AuthContext } from "../Auth/Auth.provider";

describe("GlobalProvider", () => {
  it("isDark is false by default", async () => {
    const contextValueAuth = {
      userData: { user: { uid: "kjdhkd" } },
    };
    await act(async () =>
      render(
        <AuthContext.Provider value={contextValueAuth}>
          <GlobalProvider>
            <GlobalContext.Consumer>
              {(value) => <span>Is dark mode: {value.isDark.toString()}</span>}
            </GlobalContext.Consumer>
          </GlobalProvider>
        </AuthContext.Provider>
      )
    );

    expect(screen.getByText("Is dark mode: false")).toBeTruthy();
  });

  it("sets isDark to true", async () => {
    const contextValueAuth = {
      userData: { user: { uid: "kjdhkd" } },
    };
    await act(async () =>
      render(
        <AuthContext.Provider value={contextValueAuth}>
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
        </AuthContext.Provider>
      )
    );

    fireEvent.click(screen.getByText("DarkMode"));

    expect(screen.getByText("Is darkMode in: true")).toBeTruthy();
  });
});
