import { createTheme } from '@mui/material/styles'
import { primaryColor, secondaryColor } from './colors'

const theme = createTheme({

    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#000000'
        },

        secondary: {
            main: secondaryColor,
        },
    },
    components:{
        MuiButton:{
          variants: [
            {
              props: { variant: 'primary' },
              style: {
                background: '#5cb646',
                padding: '12px'
              },
            },
            {
                props: { variant: 'secondary' },
                style: {
                  background: primaryColor,
                  padding: '12px',
                  color:'black'
                },
              }
          ]
          
        }
    }
})


export default theme