
import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm text-gray-300">{skill}</span>
        <span className="font-mono text-sm text-jarvis-blue">{percentage}%</span>
      </div>
      <div className="w-full bg-jarvis-gray rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-jarvis-blue to-jarvis-blue-light rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
