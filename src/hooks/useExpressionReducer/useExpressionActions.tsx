import { Direction } from "./useExpressionState";

export const INSERT_ACTION_TYPE = "[Calculator] Insert character";
export const InsertAction = (payload: { char: string }): { type: typeof INSERT_ACTION_TYPE; payload: { char: string } } => ({
  type: INSERT_ACTION_TYPE,
  payload,
});

export const MOVE_ACTION_TYPE = "[Calculator] Move selector";
export const MoveAction = (payload: { direction: Direction }): { type: typeof MOVE_ACTION_TYPE; payload: { direction: Direction } } => ({
  type: MOVE_ACTION_TYPE,
  payload,
});

export const DELETE_ACTION_TYPE = "[Calculator] Delete character";
export const DeleteAction = (): { type: typeof DELETE_ACTION_TYPE } => ({
  type: DELETE_ACTION_TYPE,
});

export type Actions = ReturnType<typeof InsertAction> | ReturnType<typeof MoveAction> | ReturnType<typeof DeleteAction>;
