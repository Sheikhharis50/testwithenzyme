import { SET_USER } from "../types";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
