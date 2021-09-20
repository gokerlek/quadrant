import { Chart } from "./chart";
import { Table } from "./table";
import React, { useEffect, useState } from "react";
import { TableRowInterface } from "./table-row.interfaces";
import { ChartArea } from "./chart-area";
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
  //Local Storage
  const key = "tableRow";

  const [tableRow, setTableRow] = useState<TableRowInterface[]>(() => {
    const persistedValue = window.localStorage.getItem(key);
    return persistedValue !== null ? JSON.parse(persistedValue) : defaultData;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(tableRow));
  }, [tableRow]);

  // Delete new row function
  const onDelete = (id: number) => {
    const newList = tableRow.filter((item) => item.id !== id);
    setTableRow(newList);
  };
  // Add new row function
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

  // get data from input field
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updateTableRow = [...tableRow];
    const data = updateTableRow[index];
    const value = e.target.value;
    const name = e.target.name;
    if (name === "label") {
      data.label = value;
    } else if (name === "vision") {
      data.vision = value as unknown as number;
    } else if (name === "ability") {
      data.ability = value as unknown as number;
    }
    setTableRow(updateTableRow);
  };

  // getting point coordinates
  const onDrag = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const onDragData = [...tableRow];

    const coordinate = (
      e.target as HTMLDivElement
    ).parentElement!.getBoundingClientRect();

    onDragData[index].vision = (e.clientX - coordinate.x) / 4;
    onDragData[index].ability = (400 - e.clientY + coordinate.y) / 4;

    setTableRow(onDragData);
  };
  return (
    <>
      <Chart>
        <ChartArea />
        {tableRow.map((rowValue, index) => (
          <div
            key={rowValue.id}
            draggable='true'
            onDrag={(e) => onDrag(e, index)}
            onDragOver={(e) => e.preventDefault()}
            style={{
              bottom: `${rowValue.ability * 4}px`,
              left: `${rowValue.vision * 4}px`,
            }}
            className='absolute opacity-70 rounded-full m-0 bg-DARK_BLUE w-4 h-4 transform origin-center -translate-x-1/2  translate-y-1/2'>
            <div className='transform translate-y-4 translate-x-1/2'>
              {rowValue.label}
            </div>
          </div>
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
                max='100'
                min='0'
                type='number'
                className='px-2 w-full focus:outline-none cursor-pointer '
                onChange={(e) => onChange(e, index)}
                name={"vision"}
              />
            </td>
            <td className='border border-LIGHT_BLUE rounded-md text-sm font-normal py-0'>
              <input
                defaultValue={rowValue.ability}
                max='100'
                min='0'
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
