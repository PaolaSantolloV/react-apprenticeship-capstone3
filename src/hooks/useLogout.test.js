import "@testing-library/jest-dom";
import { useLogout } from "./useLogout";
import { act } from "@testing-library/react-hooks/native";

const mockSignOut = jest.fn(() =>
  Promise.resolve({
    user: {
      uid: "fakeUid",
    },
  })
);

const mockGetAuth = jest.fn();

jest.mock("firebase/auth", () => {
  return {
    getAuth: () => jest.fn(),
    signOut: () => mockSignOut,
  };
});

describe("useLogout hook", () => {
  test("should request correctly", async () => {
    act(() => {
      useLogout();
    });

    mockSignOut(mockGetAuth);
    expect(mockSignOut).toBeCalledWith(mockGetAuth);
  });

  test("return error when failure", async () => {});
});
