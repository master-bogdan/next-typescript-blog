import React from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { Provider, useStore } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore();
  
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default wrapper.withRedux(MyApp);
