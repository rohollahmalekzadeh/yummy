import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';

type FormLayoutProps = {
  className?: string;
  children: ReactElement;
};

const FormLayout: FC<FormLayoutProps> = ({ className = '', children }) => {
  return (
    <section
      className={classNames(
        className,
        `w-96 flex flex-col shadow-2xl rounded-xl backdrop-blur-3xl bg-white/20 
   pt-10 py-10 h-[650px] justify-center  text-xl `
      )}
    >
      {children}
    </section>
  );
};

export default FormLayout;
