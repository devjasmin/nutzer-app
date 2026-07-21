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

type ChangeAction = {
  type: "change";
  field: string;
  value: string;
};

type LoadAction = {
  type: "load";
  userData: typeof initialState;
};

type Action = ChangeAction | LoadAction;

export function infoReducer(state: typeof initialState, action: Action) {
  if (action.type === "change") {
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  if (action.type === "load") {
    return {
      ...action.userData,
    };
  }

  return state;
}
