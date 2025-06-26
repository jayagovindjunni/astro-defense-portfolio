
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full glass-effect hover:bg-jarvis-blue/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-jarvis-blue group-hover:rotate-180 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-jarvis-blue group-hover:rotate-180 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
