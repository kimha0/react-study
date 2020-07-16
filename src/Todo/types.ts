import { ACTION_TYPE, initialState, connector } from "./container";
import { ConnectedProps } from "react-redux";


export interface Item {
  uuid: string;
  title: string;
  isVisible: boolean;
}
export interface AddListAction {
  type: typeof ACTION_TYPE.ADD_LIST,
  payload: Readonly<Item>,
};
export interface RemoveListAction {
  type: typeof ACTION_TYPE.REMOVE_LIST,
  payload: Readonly<Item>,
};
export interface UpdateListAction {
  type: typeof ACTION_TYPE.UPDATE_LIST,
  payload: Readonly<Item>,
};
export type TodoActionTypes = AddListAction | RemoveListAction | UpdateListAction;
export type TodoState = Readonly<typeof initialState>;
export type PropsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsFromRedux & {};
