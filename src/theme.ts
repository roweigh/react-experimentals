'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const dark = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: { mode: 'dark' }
});

export const light = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: { mode: 'light' }
});
