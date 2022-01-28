/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../input/Input.component";
import Button from "../button/Button.component";
import {
  StyledFormContainer,
  StyledLabelCaption,
  StyledLabelError,
  StyledLabelQuestion,
  StyledLabelTitle,
  StyledWrapper,
  StyledWrapperButton,
} from "./AuthForm.styles";

function AuthForm({
  question,
  caption,
  pathQuestion,
  labelButton,
  onSubmit,
  isError,
}) {
  const [authData, setAuthData] = useState({ email: "", password: "" });

  const handleChange = ({ fieldName, event }) => {
    setAuthData({
      ...authData,
      [fieldName]: event.currentTarget.value,
    });
  };
  return (
    <StyledFormContainer title="auth-form">
      <Link style={{ textDecoration: "none" }} to={pathQuestion}>
        <StyledLabelQuestion>{question} </StyledLabelQuestion>
      </Link>
      <StyledWrapper>
        <StyledLabelTitle>Welcome to notes!</StyledLabelTitle>
        {caption && <StyledLabelCaption>{caption}</StyledLabelCaption>}
      </StyledWrapper>
      <Input
        placeholder="example@gmail.com"
        type="text"
        id="email"
        title="email"
        onChange={(event) => handleChange({ fieldName: "email", event })}
        value={authData.email}
        label="Email"
      />
      <Input
        placeholder="*******"
        type="password"
        id="password"
        title="password"
        onChange={(event) => handleChange({ fieldName: "password", event })}
        value={authData.password}
        label="Password"
      />
      {isError === true && (
        <StyledLabelError title="error-label">
          * Email or password are incorrect. Please try again.
        </StyledLabelError>
      )}
      <StyledWrapperButton>
        <Button
          title="auth-button"
          label={labelButton}
          onClick={() => onSubmit(authData.email, authData.password)}
        />
      </StyledWrapperButton>
    </StyledFormContainer>
  );
}

export default AuthForm;
