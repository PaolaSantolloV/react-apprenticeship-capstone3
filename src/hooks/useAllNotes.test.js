import "@testing-library/jest-dom";
import { mockError, mockResponseAllNotes } from "../utils/mocks/notesMocks";
import { useAllNotes } from "./useAllNotes";

beforeEach(() => {
  fetch.resetMocks();
});

describe("useAlNotes hook", () => {
  test("should fetch correctly", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponseAllNotes));
    const response = await useAllNotes();
    expect(response).toEqual(mockResponseAllNotes);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("return error when failure", async () => {
    fetch.mockReject(() => Promise.reject(mockError));
    const response = await useAllNotes();
    expect(response).toEqual(mockError);
    expect(fetch).toHaveBeenCalled();
  });
});
