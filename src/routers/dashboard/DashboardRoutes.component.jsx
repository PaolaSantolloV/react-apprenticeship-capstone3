import React from "react";
import { Routes, Route } from "react-router-dom";
import ArchivedPage from "../../pages/Archived/Archived.page";
import NotesPage from "../../pages/Notes/Notes.page";

// eslint-disable-next-line react/prop-types
function DashboardRoutes() {
  //solo en estas routes se va ver el header
  return (
    // aqui va el header o navbar
    <Routes>
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/notes/archived" element={<ArchivedPage />} />
    </Routes>
  );
}

export default DashboardRoutes;
