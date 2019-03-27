import React from 'react';
import App, { Container } from 'next/app';
import Layouts from '../layouts';
import { initializeStore } from '../store';
import { Provider } from 'mobx-react';
import 'normalize.css';
import 'github-markdown-css';
import 'gitting/dist/gitting.css';
import '../styles/index.scss';

export default class extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    let appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  constructor(props) {
    super(props);
    const isServer = !process.browser;
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={this.mobxStore}>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </Provider>
      </Container>
    );
  }
}
