import { initialState, actions } from "./container";
import { ActionType } from "typesafe-actions";

export interface Item {
  uuid: string;
  title: string;
  isVisible: boolean;
}
export type TodoState = Readonly<typeof initialState>;
export type Actions = ActionType<typeof actions>;