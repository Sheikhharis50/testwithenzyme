import { ADD_POSTS } from "../types";
import postReducer from "./postReducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it("Should return new state if receiving type", () => {
    const mockData = [
      {
        title: "title 1",
      },
      {
        title: "title 2",
      },
    ];
    const newState = postReducer(undefined, {
      type: ADD_POSTS,
      payload: mockData,
    });
    expect(newState).toEqual(mockData);
  });
});
