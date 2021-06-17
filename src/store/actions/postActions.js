import { ADD_POSTS } from "../types";

export const addPosts = (payload) => {
  return {
    type: ADD_POSTS,
    payload: payload,
  };
};
