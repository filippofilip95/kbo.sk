import Head from "next/head";

import { domain } from "@/lib/constants";
import React from "react";

export default function Meta({
  title = "Jakub Krehel",
  description = "Jakub Krehel",
  image = `${domain}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="image" content={image} />
        <meta property="og:logo" content={`${domain}/avatar.jpg`}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:creator" content="@steventey" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
    </>
  );
}
