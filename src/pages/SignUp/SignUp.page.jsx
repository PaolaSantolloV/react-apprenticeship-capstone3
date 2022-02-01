import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/authForm/AuthForm.component";
import { useSignUp } from "../../hooks/useSignUp";
import { StyledSignUpContainer } from "./SignUp.styles";

function SignUpPage() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onSubmitSignUp = async (email, password) => {
    useSignUp(email, password)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return (
    <StyledSignUpContainer title="sign-up-page">
      <AuthForm
        question="Already have an account?"
        caption="Register your account"
        labelButton="Sign up"
        onSubmit={onSubmitSignUp}
        isError={isError}
        pathQuestion="/login"
      />
    </StyledSignUpContainer>
  );
}

export default SignUpPage;
