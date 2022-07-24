import classNames from 'classnames';

const Form = ({ className, children, onSubmit, ...otherProps }) => {
  return (
    <form
      className={classNames(className, `py-10 flex flex-col`)}
      {...otherProps}
    >
      {children}
    </form>
  );
};

export default Form;
