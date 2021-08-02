import Document, { Html, Head, Main, NextScript } from "next/document";

class ExtendedDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ExtendedDocument;
