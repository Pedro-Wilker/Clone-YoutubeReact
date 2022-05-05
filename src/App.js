import React from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Home from './Home';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#b71c1c',
      },
      secondary: {
        main: '#4a148c',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
     <Home></Home>
    </ThemeProvider>
  );
}

export default App;