import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardRoutes from "./DashboardRoutes.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { MemoryRouter } from "react-router-dom";

const contextValue = {
  authed: true,
};

describe("<DashboardRoutes />", () => {
  test("should render dashboard correctly", () => {
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(container).toBeValid();
  });

  test("should render notes route correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/notes"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const notesPage = getByTitle("notes");
    expect(notesPage).toBeInTheDocument();
  });

  test("should render archived route correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/notes/archived"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const archivedPage = getByTitle("archived");
    expect(archivedPage).toBeInTheDocument();
  });

  //agregar test para que aparezca el navbar 205
});
