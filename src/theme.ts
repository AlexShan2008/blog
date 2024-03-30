import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Raleway', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#42A9F7',
    },
    secondary: {
      main: '#EC7E5F',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
