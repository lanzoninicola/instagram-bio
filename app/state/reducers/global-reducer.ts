import { useReducer } from "react";
import { Actions } from "../types";

const initialState = {
  currentAction: "",
};

export default function globalReducer(
  state = initialState,
  { type, payload }: Actions
) {
  switch (type) {
    case "INIT_STATE":
      return { ...state, ...payload };
    default:
      return state;
  }
}
