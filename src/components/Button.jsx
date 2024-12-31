import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary' }) {
  return (
    <motion.button
      className={`btn btn--${variant}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}