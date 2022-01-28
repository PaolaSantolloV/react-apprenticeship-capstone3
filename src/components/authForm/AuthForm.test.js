import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthForm from "./AuthForm.component";

const onSubmit = jest.fn();

describe("<AuthForm>", () => {
  test("should create the auth form correctly", () => {
    const { getByTitle } = render(
      <AuthForm
        question="Already have an account"
        caption="Register"
        labelButton={"Submit"}
        onSubmit={onSubmit}
        isError={false}
      />
    );
    const emailInput = getByTitle("email");
    const passwordInput = getByTitle("password");
    fireEvent.change(emailInput, { target: { value: "paola@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456789" } });
    const button = getByTitle("auth-button");
    fireEvent.click(button);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should render label error correctly when a error exist", () => {
    const { getByTitle } = render(
      <AuthForm
        question="Already have an account"
        caption="Register"
        labelButton={"Submit"}
        onSubmit={onSubmit}
        isError={true}
      />
    );
    const errorLabel = getByTitle("error-label");
    expect(errorLabel).toBeInTheDocument();
  });

  test("should render AuthForm correctly without caption", () => {
    const { getByTitle } = render(
      <AuthForm
        question="Already have an account"
        labelButton={"Submit"}
        onSubmit={onSubmit}
        isError={true}
      />
    );
    const authForm = getByTitle("auth-form");
    expect(authForm).toBeInTheDocument();
  });
});
