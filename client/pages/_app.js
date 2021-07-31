import Layout from "../compoenents/layout/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>  
  </ThemeProvider>
  )}

export default MyApp
