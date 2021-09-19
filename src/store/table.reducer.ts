import { TableActions, TableActionType } from "./table.actions";
import { TableRowInterface } from "./table-row.interfaces";

export const reducer = (state: TableRowInterface[], action: TableActions) => {
  switch (action.type) {
    case TableActionType.addRow: {
      return [...state, action.payload];
    }
    case TableActionType.updateRow: {
      return [...state, action.payload];
    }
    case TableActionType.deleteRow: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
