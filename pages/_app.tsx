import axios from 'axios';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import Alert from '../src/modules/Modals/Alert';
import { initStore } from '../src/redux/store';

declare var global: {
  axios: any;
};

global.axios = axios;

export default withRedux(initStore)(
  class MyApp extends App {
    public static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    public render() {
      const { props } = this as any;
      const { Component, pageProps, store } = props;
      return (
        <Container>
          <Provider store={store}>
            <div>
              <Component {...pageProps} />
              <Alert />
            </div>
          </Provider>
        </Container>
      );
    }
  }
);
