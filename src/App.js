import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Private from "./components/private/Private.compoenent";
import AuthProvider from "./providers/Auth/Auth.provider";
import GlobalProvider from "./providers/Global/Global.provider";
import LoginPage from "./pages/Login/Login.page";
import NotFoundPage from "./pages/NotFound/NotFound.page";
import ArchivedPage from "./pages/Archived/Archived.page";
import NotesPage from "./pages/Notes/Notes.page";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route element={<Private />} path="/notes" component={NotesPage} />
            <Route
              element={<Private />}
              path="/notes/archived"
              component={ArchivedPage}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
