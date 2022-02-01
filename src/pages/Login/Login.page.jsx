import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/authForm/AuthForm.component";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../providers/Auth/Auth.provider";
import { StyledLoginContainer } from "./Login.styles";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [isError, setIsError] = useState(false);

  const onSubmitLogin = async (email, password) => {
    useLogin(email, password)
      .then((result) => {
        if (result.operationType === "signIn") {
          setIsError(false);
          login(result);
          navigate("/notes");
        } else if (result.error.code === 400) {
          console.log("ok");
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return (
    <StyledLoginContainer title="login-page">
      <AuthForm
        question="Haven't an account?"
        labelButton="Login"
        onSubmit={onSubmitLogin}
        isError={isError}
        pathQuestion="/signup"
      />
    </StyledLoginContainer>
  );
}

export default LoginPage;
