import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./private/PrivateRoute.component";
import LoginPage from "../pages/Login/Login.page";
import NotFoundPage from "../pages/NotFound/NotFound.page";
import PublicRoute from "./public/PublicRoute.component";
import DashboardRoutes from "./dashboard/DashboardRoutes.component";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/NotFound" element={<NotFoundPage />} />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
