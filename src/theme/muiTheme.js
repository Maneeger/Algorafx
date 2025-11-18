import { createTheme } from '@mui/material/styles';

/**
 * Defines the custom Material UI theme, including the global font family 
 * to align with a sans-serif system stack (like Tailwind's font-sans).
 */
export const customTheme = createTheme({
  typography: {
    // This is the key setting that applies the font stack globally
  fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#4f46e5', // Indigo-600
    },
    success: {
      main: '#018619', // Custom green accent
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        }
      }
    }
  }
});
