import { createTheme } from '@mui/material/styles'
import { primaryColor, secondaryColor } from './colors'

const theme = createTheme({
    typography: {
      fontFamily: 'IBM Plex Sans'
    }, 

    palette: {
        primary: {
           
            main: primaryColor,
            contrastText: '#000000'
        },

        secondary: {
        
        main: secondaryColor,
        },
    }
})


export default theme