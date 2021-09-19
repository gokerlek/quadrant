import React from "react";
import { TableRowInterface } from "../store/table-row.interfaces";
import { Button } from "./button";

export type Table = {
  rowValue: TableRowInterface;
  onClick: () => void;
  onChangeLabel: () => void;
  onChangeVision: () => void;
  onChangeAbility: () => void;
};

export const TableRow: React.FC<Table> = ({
  rowValue,
  onClick,
  onChangeAbility,
  onChangeLabel,
  onChangeVision,
}) => {
  const onChange = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <tr>
      <td className=' border border-LIGHT_BLUE rounded-md  text-sm font-normal py-0 '>
        <input
          defaultValue={rowValue.label}
          type='text'
          className='px-2 w-full focus:outline-none cursor-pointer '
          onChange={onChange}
        />
      </td>
      <td className='border border-LIGHT_BLUE rounded-md   text-sm font-normal py-0 '>
        <input
          defaultValue={rowValue.vision}
          type='number'
          className='px-2 w-full focus:outline-none cursor-pointer '
        />
      </td>
      <td className='border border-LIGHT_BLUE rounded-md text-sm font-normal py-0'>
        <input
          defaultValue={rowValue.ability}
          type='number'
          className='px-2 w-full focus:outline-none cursor-pointer '
        />
      </td>
      <td>
        <Button size={7} onClick={onClick}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
