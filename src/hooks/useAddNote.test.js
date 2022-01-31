import "@testing-library/jest-dom";
import { useAddNote } from "./useAddNote";
import { mockError, mockResponseNote } from "../utils/mocks/notesMocks";

beforeEach(() => {
  fetch.resetMocks();
});

describe("useAddNote hook", () => {
  test("should fetch correctly", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponseNote));
    const noteData = {
      note: "test",
      color: "#ffffff",
      status: true,
    };
    const response = await useAddNote(noteData);
    expect(response).toEqual(mockResponseNote);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("return error when failure", async () => {
    fetch.mockReject(() => Promise.reject(mockError));
    const noteData = {
      note: "test",
      color: "#ffffff",
      status: true,
    };
    const response = await useAddNote(noteData);
    expect(response).toEqual(mockError);
    expect(fetch).toHaveBeenCalled();
  });
});
