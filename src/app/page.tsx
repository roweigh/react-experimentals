'use client';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const drawerWidth = 240;

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />

          <Divider />
          <List>
            {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mt: 'auto' }}/>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', p: 1 }}>
            Swap to {theme.palette.mode === 'dark' ? 'light' : 'dark'} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Drawer>

        <Box>
          Hello World
        </Box>
      </Box>
    </ThemeProvider>
  );
}
