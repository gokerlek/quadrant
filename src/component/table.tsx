import React, { useState } from "react";
import { TableRowInterface } from "../store/table-row.interfaces";
import { Button } from "./button";
import { TableRow } from "./tableRow";

const defaultData: TableRowInterface[] = [
  {
    label: "New",
    vision: 50,
    ability: 50,
    id: Date.now().valueOf(),
  },
];
export const Table: React.FC = () => {
  const [label, setLabel] = useState<TableRowInterface[]>(defaultData);

  console.log(label);

  const addRowToTable = () => {
    const updateLabel = label;
    updateLabel.push(
      ...[
        {
          label: "New",
          vision: 50,
          ability: 50,
          id: Date.now().valueOf(),
        },
      ]
    );
    setLabel([...updateLabel]);
  };

  const deleteRowFromTable = (id: number) => {
    const newList = label.filter((item) => item.id !== id);
    setLabel(newList);
    console.log(label);
  };
  return (
    <div className='mx-6 h-400px '>
      <Button onClick={addRowToTable}> Add </Button>
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
        <tbody>
          {label.map((data) => (
            <TableRow
              key={data.id}
              rowValue={data}
              onClick={() => deleteRowFromTable(data.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
