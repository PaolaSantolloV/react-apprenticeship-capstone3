import "@testing-library/jest-dom";
import { useSignUp } from "./useSignUp";
import { act } from "@testing-library/react-hooks/native";

const mockSignUp = jest.fn(() =>
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
    createUserWithEmailAndPassword: () => mockSignUp,
  };
});

describe("useSignup hook", () => {
  test("should request correctly", async () => {
    const email = "paola@gmail.com";
    const password = "12345678";

    act(() => {
      useSignUp(email, password);
    });

    mockSignUp(mockGetAuth, email, password);
    expect(mockSignUp).toBeCalledWith(mockGetAuth, email, password);
  });

  test("return error when failure", async () => {});
});
