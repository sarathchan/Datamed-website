import { motion } from 'framer-motion';

const HoverScale = ({ 
  children, 
  scale = 1.05, 
  duration = 0.3,
  className = '',
  whileTap = { scale: 0.98 }
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        transition: { duration, ease: "easeOut" }
      }}
      whileTap={whileTap}
      transition={{ 
        duration, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
