import Document, { NextScript } from 'next/document'
import { Head, Html, Main } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex flex-col gap-10 min-h-screen bg-primary-light font-display font-bold">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
