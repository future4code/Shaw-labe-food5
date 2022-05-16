import { ThemeProvider } from '@mui/material/styles'
import GlobalState from './global/GlobalState'
import Router from "./routes/Router" 
import React from 'react'
import { GlobalStyle } from './global/GlobalStyle'
import theme from './theme/theme'


function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}
export default App;
