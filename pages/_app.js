import React from "react";
import App, { Container } from "next/app";
import Home from "../layouts/Home";
import "normalize.css";
import "github-markdown-css";
import "gitting/dist/gitting.css";
import "../styles/index.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="wrapper">
          <Home>
            <Component {...pageProps} />
          </Home>
        </div>
      </Container>
    );
  }
}

export default MyApp;
