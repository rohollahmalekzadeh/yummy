import React from 'react';

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="relative w-11/12 self-center  ">
      <label
        htmlFor={label}
        className={` bg-[#FEEEDA] px-4 transition-all duration-300 absolute top-4 left-3 text-xs  opacity-80 ${
          otherProps?.value && otherProps.value.length > 0
            ? ' text-slate-700 -translate-y-7 -translate-x-1 text-lg'
            : ''
        }`}
      >
        {label.toUpperCase()}
      </label>
      <input
        className={`transition-all duration-300 text-slate-400 w-full p-3 px-7 mb-10 border-b-2 border-white focus:outline-0 bg-transparent text-lg ${
          otherProps?.value && otherProps?.value.length > 0 ? ' border-2' : ''
        }`}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
