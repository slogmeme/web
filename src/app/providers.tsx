'use client';

import { ThemeProvider } from 'styled-components';

const theme = {
  fonts: {
    goodSans: 'var(--font-good-sans), Arial, sans-serif',
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
} 