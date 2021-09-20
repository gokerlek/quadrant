export const ChartArea = () => {
  return (
    <>
      <div className='absolute  transform translate translate-y-5 left-0 bottom-0 '>
        Completeness of Vision &#8594;
      </div>
      <div
        style={{ bottom: "0", left: "0" }}
        className='absolute  transform -translate-x-60 -translate-y-14  -rotate-90'>
        Ability to Execute &#8594;
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
    </>
  );
};
