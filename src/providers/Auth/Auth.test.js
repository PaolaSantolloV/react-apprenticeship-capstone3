import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AuthContext, AuthProvider } from "./Auth.provider";

describe("AuthProvider", () => {
  it("authed is false by default", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => <span>Is authed: {value.authed.toString()}</span>}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(getByText("Is authed: false")).toBeTruthy();
  });

  it("on login setAuthed to true", () => {
    const data = {
      name: "paola",
      password: "123456",
    };
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => (
            <>
              <button onClick={value.login(data)}>Login</button>
              <span>Is login in: {value.authed.toString()}</span>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    fireEvent.click(getByText("Login"));
    expect(getByText("Is login in: true")).toBeTruthy();
  });

  it("on logout setAuthed to false", () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => (
            <>
              <button onClick={value.logout}>Login</button>
              <span>Is login in: {value.authed.toString()}</span>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    fireEvent.click(getByText("Login"));
    expect(getByText("Is login in: false")).toBeTruthy();
  });
});
