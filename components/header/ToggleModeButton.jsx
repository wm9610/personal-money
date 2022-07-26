import React, {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';

export default function ToggleModeButton() {
  const {theme, setTheme} = useTheme();
  const [themeSetting, setThemeSetting] = useState('light');

  const setting = {
    icon: {
      dark: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
      light:
        'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    },
    class: {
      light: 'h-6 w-6 text-neutral-800',
      dark: 'h-6 w-6 text-stone-50',
    },
  };

  function toggleTheme() {
    const nextTheme = localStorage.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.theme = nextTheme;
    setThemeSetting(nextTheme);
  }

  useEffect(() => {
    setThemeSetting(localStorage.theme ? localStorage.theme : 'light');
  }, []);

  return (
    <button onClick={toggleTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={setting.class[themeSetting]}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={setting.icon[themeSetting]}
        />
      </svg>
    </button>
  );
}
