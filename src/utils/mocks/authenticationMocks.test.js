import "@testing-library/jest-dom";
import { mockError, mockLogout } from "./authenticationMocks";

test("should have the error json correctly", () => {
  const expected = {
    code: 400,
    message: "An error has occurred. Please try again.",
  };
  expect(mockError).toMatchObject(expected);
});

test("should have the error json correctly", () => {
  const expected = {
    successful: true,
  };
  expect(mockLogout).toMatchObject(expected);
});
