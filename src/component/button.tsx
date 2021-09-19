import React from "react";
export type Props = {
  onClick: () => void;
  size?: number;
};

export const Button: React.FC<Props> = ({ children, onClick, size = 3 }) => {
  return (
    <button
      style={{ width: `${size}rem` }}
      onClick={onClick}
      className='cursor-pointer border border-gray-400 bg-LIGHT_GREY rounded-md py-1 px-2 hover:bg-DARK_GREY'>
      {children}
    </button>
  );
};
