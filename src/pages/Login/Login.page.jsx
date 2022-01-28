import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/authForm/AuthForm.component";
import { useLogin } from "../../hooks/useLogin";
import { StyledLoginContainer } from "./Login.styles";

function LoginPage() {
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
    <StyledLoginContainer title="login">
      <AuthForm
        question="Haven't an account?"
        labelButton="Login"
        onSubmit={onSubmitLogin}
        isError={isError}
      />
    </StyledLoginContainer>
  );
}

export default LoginPage;
