import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import { Provider } from "react-redux";
import store from "../store/store";


function MyApp({ Component, pageProps }) {

  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>  
    </ThemeProvider>
  </Provider>
  )}

export default MyApp
