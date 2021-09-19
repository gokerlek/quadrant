import { Chart } from "./chart";
import { Table } from "./table";
import React, { useState } from "react";
import { TableRowInterface } from "../store/table-row.interfaces";
import { ChartArea } from "./chart-area";
import { Point } from "./point";
import { Button } from "./button";

const defaultData: TableRowInterface[] = [
  {
    label: "New",
    vision: 50,
    ability: 50,
    id: Date.now().valueOf(),
  },
];
export const Quadrant: React.FC = () => {
  const [tableRow, setTableRow] = useState<TableRowInterface[]>(defaultData);

  const onDelete = (id: number) => {
    const newList = tableRow.filter((item) => item.id !== id);
    setTableRow(newList);
  };

  const onAdd = () => {
    const newTableRow = tableRow;
    newTableRow.push(
      ...[
        {
          label: "New",
          vision: 50,
          ability: 50,
          id: Date.now().valueOf(),
        },
      ]
    );
    setTableRow([...newTableRow]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updateTableRow = [...tableRow];

    if (e.target.name === "label") {
      updateTableRow[index].label = e.target.value;
    } else if (e.target.name === "vision") {
      updateTableRow[index].vision = e.target.value as unknown as number;
    } else if (e.target.name === "ability") {
      updateTableRow[index].ability = e.target.value as unknown as number;
    }

    setTableRow(updateTableRow);
  };

  return (
    <>
      <Chart>
        <ChartArea />
        {tableRow.map((rowValue) => (
          <Point
            key={rowValue.id}
            top={rowValue.ability * 4}
            left={rowValue.vision * 4}
            label={rowValue.label}
          />
        ))}
      </Chart>
      <Table onAdd={onAdd}>
        {tableRow.map((rowValue, index) => (
          <tr key={rowValue.id}>
            <td className=' border border-LIGHT_BLUE rounded-md  text-sm font-normal py-0 '>
              <input
                defaultValue={rowValue.label}
                type='text'
                className='px-2 w-full focus:outline-none cursor-pointer '
                onChange={(e) => onChange(e, index)}
                name={"label"}
              />
            </td>
            <td className='border border-LIGHT_BLUE rounded-md   text-sm font-normal py-0 '>
              <input
                defaultValue={rowValue.vision}
                type='number'
                className='px-2 w-full focus:outline-none cursor-pointer '
                onChange={(e) => onChange(e, index)}
                name={"vision"}
              />
            </td>
            <td className='border border-LIGHT_BLUE rounded-md text-sm font-normal py-0'>
              <input
                defaultValue={rowValue.ability}
                type='number'
                className='px-2 w-full focus:outline-none cursor-pointer '
                onChange={(e) => onChange(e, index)}
                name={"ability"}
              />
            </td>
            <td>
              <Button size={7} onClick={() => onDelete(rowValue.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};
