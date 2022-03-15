import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { createTheme } from "styled-breakpoints";

const theme = createTheme({
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
