import { initialState } from "./container";

export interface Item {
  uuid: string;
  title: string;
  isVisible: boolean;
}
export type TodoState = Readonly<typeof initialState>;
export type Props = {};
