import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider attribute="class">
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
