import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardRoutes from "./DashboardRoutes.component";
import { AuthContext } from "../../providers/Auth/Auth.provider";
import { MemoryRouter } from "react-router-dom";
import { GlobalContext } from "../../providers/Global/Global.provider";

const contextValue = {
  authed: true,
  userData: { user: { uid: "kjdhkd" } },
};

const contextValueGlobal = {
  activeNotes: [
    {
      color: "#0077ff",
      id: "-Muh0xRHUL46QtpMkmce",
      note: "notes teste",
      status: true,
    },
  ],
  isDark: false,
  searchTerm: "",
};

const contextValueGlobalArchive = {
  archiveNotes: [
    {
      color: "#0077ff",
      id: "-Muh0xRHUL46QtpMkmce",
      note: "notes teste",
      status: true,
    },
  ],
  isDark: false,
  searchTerm: "",
};

describe("<DashboardRoutes />", () => {
  test("should render dashboard correctly", () => {
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <MemoryRouter>
            <DashboardRoutes />
          </MemoryRouter>
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    expect(container).toBeValid();
  });

  test("should render notes route correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobal}>
          <MemoryRouter initialEntries={["/notes"]}>
            <DashboardRoutes />
          </MemoryRouter>
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const notesPage = getByTitle("notes");
    expect(notesPage).toBeInTheDocument();
  });

  test("should render archived route correctly", () => {
    const { getByTitle } = render(
      <AuthContext.Provider value={contextValue}>
        <GlobalContext.Provider value={contextValueGlobalArchive}>
          <MemoryRouter initialEntries={["/notes/archived"]}>
            <DashboardRoutes />
          </MemoryRouter>
        </GlobalContext.Provider>
      </AuthContext.Provider>
    );
    const archivedPage = getByTitle("archived");
    expect(archivedPage).toBeInTheDocument();
  });

  //agregar test para que aparezca el navbar 205
});
