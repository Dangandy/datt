import { useState, useEffect } from 'react';
// Hook
export default function useMedia() {
  // State and setter for matched value
  const [value, setValue] = useState({ width: 1440, height: 1080 });

  useEffect(
    () => {
      if (typeof window === `undefined`) {
        return null;
      }

      const handleResize = () => {
        setValue({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}
