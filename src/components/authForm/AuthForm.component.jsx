import React, { useState } from "react";
import Input from "../input/Input.component";
import Button from "../button/Button.component";

// eslint-disable-next-line react/prop-types
function AuthForm({ question, caption, labelButton, onSubmit, isError }) {
  const [authData, setAuthData] = useState({ email: "", password: "" });

  const handleChange = ({ fieldName, event }) => {
    setAuthData({
      ...authData,
      [fieldName]: event.currentTarget.value,
    });
  };
  return (
    <div>
      <h3>{question} </h3>
      <h1>Welcome to notes!</h1>
      <h2>{caption}</h2>
      <p>Email</p>
      <Input
        placeholder="example@gmail.com"
        type="text"
        id="email"
        title="email"
        onChange={(event) => handleChange({ fieldName: "email", event })}
        value={authData.email}
      />
      <p>Password</p>
      <Input
        placeholder="*******"
        type="password"
        id="password"
        title="password"
        onChange={(event) => handleChange({ fieldName: "password", event })}
        value={authData.password}
      />
      {isError === true && (
        <h4 title="error-label">
          * Email or password are incorrect. Please try again.
        </h4>
      )}
      <Button
        title="auth-button"
        label={labelButton}
        onClick={() => onSubmit(authData.email, authData.password)}
      />
    </div>
  );
}

export default AuthForm;
