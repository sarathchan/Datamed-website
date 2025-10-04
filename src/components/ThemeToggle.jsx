import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full border-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-yellow-400 border-yellow-400 text-gray-900 hover:bg-yellow-300 hover:border-yellow-300 shadow-lg shadow-yellow-400/25'
          : 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 shadow-lg shadow-blue-600/25'
      } ${className}`}
      style={{
        minWidth: '48px',
        minHeight: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: theme === 'light' ? 180 : 0
      }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {theme === 'light' ? (
          <BsMoon className="w-5 h-5" />
        ) : (
          <BsSun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;