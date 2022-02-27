import React from "react";

const Loading = () => {
  return (
    <div className='header-container mt-11 flex align-center justify-center text-center flex-column'>
      <h1 className='font-medium text-5xl text-center text-slate-800'>Loading ....</h1>
      <svg className='animate-spin h-5 w-5 mr-3 ... mt-6 ml-6 flex align-center justify-center bg-sky-400 '></svg>
    </div>
  );
};

export default Loading;
