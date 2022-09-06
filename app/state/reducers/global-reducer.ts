import initialState from "../constant/initial-state";
import { Actions } from "../types";

export default function globalReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "INIT_STATE":
      return { ...state, ...action.payload };
    case "HOMEPAGE_MENU_SELECTION_YOGA":
      return {
        ...state,
        lastVisitedSlug: action.payload,
        actionDispatched: "HOMEPAGE_MENU_SELECTION_YOGA",
      };
    case "HOMEPAGE_MENU_SELECTION_MASSOTERAPHY":
      return {
        ...state,
        lastVisitedSlug: action.payload,
        actionDispatched: "HOMEPAGE_MENU_SELECTION_MASSOTERAPHY",
      };
    default:
      return state;
  }
}
