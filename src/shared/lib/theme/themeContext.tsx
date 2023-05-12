import { Context, createContext } from 'react';
import { Theme } from './useTheme';

export const ThemeContext: Context<[Theme, () => void]> =
  createContext(['light' as Theme, () => {}]);
