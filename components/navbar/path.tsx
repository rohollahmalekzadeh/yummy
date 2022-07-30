import { motion } from 'framer-motion';

const Path = ({ openPath, closedPath, ...rest }) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(40, 70%,60%)"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } },
      }}
      {...rest}
    ></motion.path>
  );
};

export default Path;
