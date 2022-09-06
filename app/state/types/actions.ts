export interface InitStateAction {
  type: "INIT_STATE";
  payload: any;
}

export interface HomepageMenuSelectionYogaAction {
  type: "HOMEPAGE_MENU_SELECTION_YOGA";
  payload: string;
}

export interface HomepageMenuSelectionMassoteraphyAction {
  type: "HOMEPAGE_MENU_SELECTION_MASSOTERAPHY";
  payload: string;
}

export type Actions =
  | InitStateAction
  | HomepageMenuSelectionYogaAction
  | HomepageMenuSelectionMassoteraphyAction;
