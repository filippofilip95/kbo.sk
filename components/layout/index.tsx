import { ReactNode } from "react";
import Meta from "./meta";
import Navigation from "@/components/layout/Navigation";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  return (
    <>
      <Meta {...meta} />
      <Navigation />
      <main className="mx-auto flex w-full max-w-[640px] items-center justify-center p-10">
        {children}
      </main>
    </>
  );
}
