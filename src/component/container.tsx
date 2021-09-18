import React from "react";

export const Container: React.FC = ({ children }) => {
  return (
    <div className=' h-screen flex font-serif text-sm justify-center items-center '>
      {children}
    </div>
  );
};
