export const Chart: React.FC = ({ children }) => {
  return (
    <div className='relative box-content w-400px h-400px border-2 border-DARK_GREY '>
      {children}
    </div>
  );
};
