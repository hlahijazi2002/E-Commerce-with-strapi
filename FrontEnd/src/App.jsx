import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Landing from "./components/Landing/Landing";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.landingColor.main
          }
        >
          <Landing />
          <Main />
        </Box>

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
