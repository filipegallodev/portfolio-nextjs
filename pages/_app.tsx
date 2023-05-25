import { Provider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../store/configureStore";
import StyledComponentsRegistry from "../lib/registry";
import ReduxThemeProvider from "../components/ReduxThemeProvider";
import GlobalStyle from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <ReduxThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ReduxThemeProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
}
