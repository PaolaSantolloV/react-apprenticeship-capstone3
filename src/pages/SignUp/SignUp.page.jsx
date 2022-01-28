import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/authForm/AuthForm.component";
import { useLogin } from "../../hooks/useLogin";
import { StyledSignUpContainer } from "./SignUp.styles";

function SignUpPage() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onSubmitLogin = async (email, password) => {
    console.log(email, password);

    useLogin(email, password)
      .then((result) => {
        navigate("/notes");
        console.log(result);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return (
    <StyledSignUpContainer title="sign-up">
      <AuthForm
        question="Already have an account?"
        caption="Register your account"
        labelButton="Sign up"
        onSubmit={onSubmitLogin}
        isError={isError}
      />
    </StyledSignUpContainer>
  );
}

export default SignUpPage;
