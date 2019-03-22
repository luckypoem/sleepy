import Document, { Html, Head, Main, NextScript } from 'next/document';
import { keywords, description } from '../sleepy.config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}