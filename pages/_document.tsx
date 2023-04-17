import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head />
      <body className="dark:bg-stone-900 bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
