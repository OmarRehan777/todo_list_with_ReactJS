import { createTheme } from "@mui/material";


export let theme = createTheme({
    typography: {
      fontFamily: 'changa, Arial, serif', 
      fontSize: 16,
  
    },
    palette: {
      first: {
        main: '#001427',
      },
      second: {
        main: '#708D81',
      },
      third: {
        main: '#D4C5E2',
      },
      fourth: {
        main: '#F4D58D',
      },
      fifth: {
        main: '#8D0801',
      },
      sixth: {
        main: '#3083DC',
      },
      seventh: {
        main: '#60935D',
      },
      eighth: {
        main: '#4F5D2F',
      },
      ninth: {
        main: '#157A6E',
      },
      tenth: {
        main: '#F991CC',
      },
      checked: {
        main: '#2DE1C2',
      },
      edit: {
        main: '#358600',
      },
      delete: {
        main: '#ED6A5A',
      },
    },
  
    // customizing toggle buttons 
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: '#4F5D2F', 
              color: 'white',
            },
            '&:not(.Mui-selected)': {
              backgroundColor: '#4F5D2F44', 
            },
            '&.Mui-selected:hover': {
                backgroundColor: '#4F5D2F', 
            },
            '&:not(.Mui-selected):hover': {
              backgroundColor: '#4F5D2F', 
            },

          },
        },
      },
    },
  });