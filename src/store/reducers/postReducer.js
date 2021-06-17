import { ADD_POSTS } from "../types";

const INITIAL_STATE = [];

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default postReducer;
