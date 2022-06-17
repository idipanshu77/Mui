import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { padding } from "@mui/system";

export const SansSerif = {
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: "bold",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#bdbcb9",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: 1.375,
      color: "#464D69",
    },
    h2: {
      fontWeight: "700",
      fontSize: 70,
      lineHeight: 1,
      color: "#464D69",
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      color: "#464D69",
    },
    h4: {
      fontWeight: "500",
      fontSize: 16,
      color: "#464D69",
      padding: "15px ",
    },
    h5: {
      fontSize: "15px",
    //   fontWeight: "500",
      color: "#464D69",
    },
    h6: {
      fontWeight: "bold",
      color: "#464D69",
    },
    p: {
      fontSize: 11,
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: "500",
      fontSize: "35",
      color: "#464D69",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 13,
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
    caption: {
      fontSize: 11,
    },
    button: {
      textTransform: "capitalize",
    },
  },
  palette: {
    primary: {
      main: "#4F46E5", //default
    },
    secondary: {
      main: "#00D0BD", //
    },
    action: {
      main: "#0f0f0f", //black
    },
    disabled: {
      main: "#ffffff", //white
    },
    success: {
      main: "#00D014", //green
    },
    string: {
      main: "#FFB70F", //orange
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

const Anktech = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Anktech;
