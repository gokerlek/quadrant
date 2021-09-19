import React from "react";

export const Container: React.FC = ({ children }) => {
  return (
    <div className=' h-screen flex font-sans text-sm justify-center items-center  align-top'>
      {children}
    </div>
  );
};
