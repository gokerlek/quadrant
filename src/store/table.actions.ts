import { TableRowInterface } from "./table-row.interfaces";

export enum TableActionType {
  addRow,
  updateRow,
  deleteRow,
}

export interface AddRowAction {
  type: TableActionType.addRow;
  payload: TableRowInterface[];
}
export interface UpdateRowAction {
  type: TableActionType.updateRow;
  payload: TableRowInterface;
}
export interface DeleteRowAction {
  type: TableActionType.deleteRow;
  payload: TableRowInterface;
}

export type TableActions = AddRowAction | UpdateRowAction | DeleteRowAction;
