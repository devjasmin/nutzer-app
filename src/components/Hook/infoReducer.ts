//import type { User } from "../User";

export const initialState = {
  username: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  post: "",
  phone: "",
  fitness: "",
};

export function infoReducer(state, action) {
  if (action.type === "change") {
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  return state;
}
