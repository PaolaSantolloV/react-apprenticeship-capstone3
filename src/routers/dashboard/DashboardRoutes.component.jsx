import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/layout/Layout.component";
import ArchivedPage from "../../pages/Archived/Archived.page";
import NotesPage from "../../pages/Notes/Notes.page";
import NotFoundPage from "../../pages/NotFound/NotFound.page";

// eslint-disable-next-line react/prop-types
function DashboardRoutes() {
  //solo en estas routes se va ver el header
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/archived" element={<ArchivedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default DashboardRoutes;
