import { ACTION_TYPE, initialState } from "./container";

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
export interface GetListAction {
  type: typeof ACTION_TYPE.GET_LIST,
};
export interface SetListAction {
  type: typeof ACTION_TYPE.SET_LIST,
  payload: Readonly<Item[]>,
}
export type TodoActionTypes = AddListAction | RemoveListAction | UpdateListAction | GetListAction | SetListAction;
export type TodoState = Readonly<typeof initialState>;
export type Props = {};
