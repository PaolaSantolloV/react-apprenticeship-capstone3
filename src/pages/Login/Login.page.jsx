import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/authForm/AuthForm.component";

function LoginPage() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onSubmitLogin = async (email, password) => {
    console.log(email, password);
    navigate("/notes");
    setIsError(false);
  };

  return (
    <div title="login">
      <AuthForm
        question="Haven't an account?"
        caption=""
        labelButton="Login"
        onSubmit={onSubmitLogin}
        isError={isError}
      />
    </div>
  );
}

export default LoginPage;
