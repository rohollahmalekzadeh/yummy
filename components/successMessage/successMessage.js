import React from 'react';
import Link from 'next/link';

const SuccessMessage = ({ SuccessMessage, children }) => {
  return (
    <div className="mx-auto pt-10 py-10 h-[500px] flex flex-col justify-center  text-xl opacity-70">
      <h1 className="text-3xl mb-3">{SuccessMessage}</h1>
      {children}
    </div>
  );
};

export default SuccessMessage;
