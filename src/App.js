import React from "react";
import LoginPage from "./pages/Login/Login.page";
import AuthProvider from "./providers/Auth/Auth.provider";
import GlobalProvider from "./providers/Global/Global.provider";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <LoginPage />
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
