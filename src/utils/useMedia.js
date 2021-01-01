import { useState, useEffect } from 'react';
// Hook

let defaultHeight = 1080;
let defaultWidth = 1440;

if (typeof window === `undefined`) {
  defaultHeight = window.innerHeight;
  defaultWidth = window.innerWidth;
}

export default function useMedia() {
  // State and setter for matched value
  const [value, setValue] = useState({ width: 1440, height: 1080 });

  useEffect(
    () => {
      const handleResize = () => {
        setValue({ width: defaultWidth, height: defaultHeight });
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}
