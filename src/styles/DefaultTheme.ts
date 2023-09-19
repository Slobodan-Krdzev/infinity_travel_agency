import { createTheme } from "@mui/material";


const DefaultTheme = createTheme({
    palette: {
        primary: {
            light: '#f7e294',
            main: '#FFCC16',
            dark: '#a6850f',
        },
        secondary: {
            light: '#d0a1e6',
            main: '#7A4094',
            dark: '#432352',
        },
        info: {
            light: '#9de0e3',
            main: '#21B0B7',
            dark: '#105d61',
        },
        warning: {
            light: '#EAE8EC',
            main: '#000000',
            dark: '#82778A'
        }
        
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontWeight: 400,
            fontSize: '38px',
            lineHeight: '45px',
            marginBottom: '2rem',
            '@media (max-width:769px)': {
                fontSize: '25px',
                lineHeight: '35px'
              }
        },
        h2: {
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '35px',
            marginBottom: '10px'
            
        },
        h3: {
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '35px',
            marginBottom: '2rem',
            '@media (max-width:769px)': {
                fontSize: '20px',
                lineHeight: '25px'

              }
        },
        h4: {
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '24.2px',
            marginBottom: '10px'
            
        },
        h5: {
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '35px',
            marginBottom: '10px',
            '@media (max-width:1255px)': {
                fontSize: '12px',
              }
        },
        h6: {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '30px',
            marginBottom: '15px',
            '@media (max-width:769px)': {
                fontSize: '12px',
                lineHeight: '20px',
              }

        },
        body1: {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '25px'

        },
        body2: {
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '18px',
            marginBottom: '10px',
            '@media (max-width:1255px)': {
                // fontSize: '20px',
              }

        },
        button: {
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '45px',
            marginBottom: '2rem',
            textTransform: 'capitalize',
            '@media (max-width:769px)': {
                fontSize: '18px',
                lineHeight: '35px'
              }
        }

    }
})

export default DefaultTheme;