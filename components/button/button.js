import classNames from 'classnames';
import { motion } from 'framer-motion';

// className="cursor-pointer  text-xl text-orange-400 hover:text-slate-100 hover:bg-orange-400  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-300 hover:shadow-lg "

const buttonContainer =
  'flex justify-center cursor-pointer w-64 text-2xl bg-orange-500 text-slate-100  hover:text-orange-500 hover:bg-orange-100  p-1 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-500 transition duration-300 focus: focus:outline-none hover:shadow-orange-400 hover:shadow-lg';

const google =
  'text-white bg-sky-500 focus:bg-sky-400 hover:shadow-sky-400 hover:bg-sky-500 focus:bg-orange-400 hover:text-white';
const inverted =
  'bg-transparent text-orange-500 hover:text-slate-100 hover:bg-orange-500 focus:text-slate-100  hover:shadow-orange-400 ';

export const BUTTON_TYPES_CLASSES = {
  google,
  inverted,
};

const Button = ({ children, buttonType, className = '', ...otherProps }) => {
  console.log(BUTTON_TYPES_CLASSES[buttonType]);

  return (
    <motion.button
      className={classNames(
        className,
        buttonContainer,
        BUTTON_TYPES_CLASSES[buttonType]
      )}
      {...otherProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
