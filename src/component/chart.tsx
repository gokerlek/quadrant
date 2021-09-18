import React from "react";

export const Chart: React.FC = ({ children }) => {
  return (
    <div className='relative box-content w-400px h-400px border-2 border-DARK_GREY '>
      <div className='absolute  transform translate translate-y-5 left-0 bottom-0 '>
        <p>Completeness of Vision</p>
      </div>
      <div
        style={{ bottom: "0", left: "0" }}
        className='absolute  transform -translate-x-60 -translate-y-12  -rotate-90'>
        Ability to Execute
      </div>
      <div className='absolute text-white bg-LIGHT_BLUE border-solid border-transparent p-1 my-2 rounded-md left-1/4 transform -translate-x-1/2'>
        Challengers
      </div>
      <div className='absolute text-white bg-LIGHT_BLUE border-solid border-transparent p-1 my-2 rounded-md left-1/4 bottom-0px transform -translate-x-1/2'>
        Niche Players
      </div>
      <div className='absolute text-white bg-LIGHT_BLUE border-solid border-transparent p-1 my-2 rounded-md right-1/4 transform translate-x-1/2'>
        Leaders
      </div>
      <div className='absolute text-white bg-LIGHT_BLUE border-solid border-transparent p-1 my-2 rounded-md right-1/4 bottom-0px transform translate-x-1/2'>
        Visionaries
      </div>
      <div className='absolute left-1/2 h-full w-2px bg-LIGHT_GREY transform -translate-x-1px'></div>
      <div className='absolute top-1/2 w-full h-2px bg-LIGHT_GREY'></div>
      <div
        draggable='true'
        style={{ top: "200px", left: "200px" }}
        className='absolute rounded-full m-0 bg-DARK_BLUE w-4 h-4 transform origin-center -translate-x-1/2  -translate-y-1/2'
      />
    </div>
  );
};
