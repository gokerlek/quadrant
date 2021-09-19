import React from "react";
export type PointProps = {
  top: number;
  left: number;
  label: string;
};

export const Point: React.FC<PointProps> = ({ top, left, label }) => {
  return (
    <div
      draggable='true'
      style={{ top: `${top}px`, left: `${left}px` }}
      className='absolute opacity-70 rounded-full m-0 bg-DARK_BLUE w-4 h-4 transform origin-center -translate-x-1/2  -translate-y-1/2'>
      <div className='transform translate-y-4 translate-x-1/2'>{label}</div>
    </div>
  );
};
