import React from "react";
import AuthProvider from "./providers/Auth/Auth.provider";
import GlobalProvider from "./providers/Global/Global.provider";
import AppRouter from "./routers/AppRouter.component";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
