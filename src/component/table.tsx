import React from "react";

export const Table: React.FC = () => {
  return (
    <div className='mx-2 h-400px '>
      <button>Add</button>
      <table className='table-fix border-separate'>
        <thead className=''>
          <tr>
            <th className='w-64 border border-white rounded-lg text-white bg-LIGHT_BLUE text-sm font-normal font-serif'>
              Label
            </th>
            <th className='w-28 border border-white rounded-lg text-white bg-LIGHT_BLUE text-sm font-normal font-serif'>
              Vision
            </th>
            <th className='w-28 border border-white rounded-lg text-white bg-LIGHT_BLUE text-sm font-normal font-serif'>
              Ability
            </th>
            <th className='w-28 border border-white rounded-lg text-white bg-LIGHT_BLUE text-sm font-normal font-serif'>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=' border border-LIGHT_BLUE rounded-md  text-sm font-normal font-serif'>
              <input
                type='text'
                className='px-2 w-full focus:outline-none cursor-pointer'
              />
            </td>
            <td className='border border-LIGHT_BLUE rounded-md   text-sm font-normal font-serif'>
              <input
                type='number'
                className='px-2 w-full focus:outline-none cursor-pointer'
              />
            </td>
            <td className='border border-LIGHT_BLUE rounded-md text-sm font-normal font-serif'>
              <input
                type='number'
                className='px-2 w-full focus:outline-none cursor-pointer'
              />
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
