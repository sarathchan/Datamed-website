import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxScroll = ({ 
  children, 
  offset = ['start end', 'end start'],
  speed = 0.5,
  className = ''
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <motion.div 
      ref={ref} 
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;
