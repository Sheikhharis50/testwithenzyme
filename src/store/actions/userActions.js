import { SET_USER } from "../types";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload: payload,
  };
};
