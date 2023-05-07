import { motion } from "framer-motion";

export const Backdrop = ({
  children,
  onClick,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
