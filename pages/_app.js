import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Custom "Dark Military Green" / "Battlefield Green" palette
// Derived from the "green logo" palette (https://www.color-hex.com/color-palette/198)
// Darkened for battlefield aesthetic, then slightly lightened for optimal visibility
const theme = createTheme({
  palette: {
    primary: {
      main: '#35705a',
      light: '#44876e',
      dark: '#284d3f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#44876e',
      light: '#559f83',
      dark: '#2d5f4a',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          transition: 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.23)',
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
