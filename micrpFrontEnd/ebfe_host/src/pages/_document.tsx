import React from 'react';
import Document,{ Html, Head, Main, NextScript, DocumentContext } from 'next/document';
//import * from '@module-federation/nextjs-mf';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"   
            rel="stylesheet"
          />
      
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  
}
}


export default MyDocument;