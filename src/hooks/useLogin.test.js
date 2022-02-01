import "@testing-library/jest-dom";
import { useLogin } from "./useLogin";
import { act } from "@testing-library/react-hooks/native";

const mockSignIn = jest.fn(() =>
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
    signInWithEmailAndPassword: () => mockSignIn,
  };
});

describe("useLogin hook", () => {
  test("should request correctly", async () => {
    const email = "paola@gmail.com";
    const password = "12345678";

    act(() => {
      useLogin(email, password);
    });

    mockSignIn(mockGetAuth, email, password);
    expect(mockSignIn).toBeCalledWith(mockGetAuth, email, password);
  });

  test("return error when failure", async () => {});
});
