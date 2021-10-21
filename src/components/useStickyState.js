import React from 'react';

export default function useStickyState(defaultValue, key) {
  function isBrowser() {
    return typeof window !== 'undefined';
  }

  const [value, setValue] = React.useState(() => {
    const stickyValue = isBrowser() && window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
