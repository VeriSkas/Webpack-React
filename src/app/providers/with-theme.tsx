import React from 'react';

import { useTheme } from '../../shared/lib/theme/useTheme';
import { ThemeContext } from '../../shared/lib/theme/themeContext';

export const withTheme = (component: () => React.ReactNode) => () => {
  const [theme, setTheme] = useTheme();

  return <ThemeContext.Provider value={[theme, setTheme]}>{component()}</ThemeContext.Provider>;
};
