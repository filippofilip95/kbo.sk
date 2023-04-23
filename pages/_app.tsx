import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { ThemeProvider } from "next-themes";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider attribute="class">
      <div className={cx(sfPro.variable, inter.variable)}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
