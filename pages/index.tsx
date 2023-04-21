import Layout from "@/components/layout";
import { connections } from "@/lib/constants";
import Avatar from "@/components/shared/Avatar";

export default function Home() {
  return (
    <Layout>
      <article>
        <header className="flex items-center">
          <Avatar alt="Jakub Krehel" size={56} src="/avatar.jpg" />
          <div className="ml-4">
            <h1 className="text-l font-medium text-neutral-700 dark:text-neutral-50">
              Jakub Krehel
            </h1>
            <h2 className="font-medium text-neutral-500 dark:text-neutral-400">
              Product designer
            </h2>
          </div>
        </header>
        <main className="mt-6 flex flex-col gap-8">
          <p className="text-neutral-700 dark:text-neutral-100">
            I&apos;m a design engineer based in Toronto, Berlin, Bratislava.
          </p>
          <p className="text-neutral-700 dark:text-neutral-100">
            I specialise in building digital products, interfaces, and design
            systems. I&apos;m currently building product at{" "}
            <a href="https://www.kontentino.com/">Kontentino</a>.
          </p>
          <p className="text-neutral-700 dark:text-neutral-100">
            I&apos;m interested in a variety of topics including product design,
            web development, information architecture, interaction design and ux
            research.
          </p>
        </main>
        <footer className="mt-20">
          <span className="text-neutral-700 dark:text-neutral-100">
            Connect
          </span>
          <ul className="mt-2 flex flex-wrap gap-4">
            {connections.map((connection) => (
              <li key={connection.label}>
                <a
                  href={connection.href}
                  target="_blank"
                  className="text-neutral-700 dark:text-neutral-100"
                  rel="noreferrer"
                >
                  {connection.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </Layout>
  );
}
