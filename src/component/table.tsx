import React from "react";
import { Button } from "./button";

export type TableProps = {
  onAdd: () => void;
};
export const Table: React.FC<TableProps> = ({ children, onAdd }) => {
  return (
    <div className='mx-6 h-400px '>
      <Button onClick={onAdd}> Add </Button>
      <table className='table-fix border-separate'>
        <thead className=''>
          <tr>
            <th className='w-64 border border-white rounded-md text-white bg-LIGHT_BLUE text-sm font-normal '>
              Label
            </th>
            <th className='w-28 border border-white rounded-md text-white bg-LIGHT_BLUE text-sm font-normal '>
              Vision
            </th>
            <th className='w-28 border border-white rounded-md text-white bg-LIGHT_BLUE text-sm font-normal '>
              Ability
            </th>
            <th className='w-28 border border-white rounded-md text-white bg-LIGHT_BLUE text-sm font-normal '>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
