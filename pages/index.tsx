import Layout from "@/components/layout";
import Avatar from "@/components/shared/Avatar";

export default function Home() {
  return (
    <Layout>
      <article>
        <header className="flex items-center">
          <Avatar alt="Jakub Krehel" size={56} src="/avatar.jpg" />
          <div className="ml-4">
            <h1 className="font-medium leading-5 text-text-light dark:text-text-dark">
              Jakub Krehel
            </h1>
            <h2 className="font-medium text-text-alt-light dark:text-text-alt-dark">
              Product designer
            </h2>
          </div>
        </header>
        <main className="mt-10 flex flex-col gap-8">
          <p className="text-text-light dark:text-text-dark">
            I’m a product designer interested in web development based in{" "}
            <a
              href="https://goo.gl/maps/FZby2vNrXrSMYnrF8"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Bratislava
            </a>
            , Slovakia. I specialise in building digital products and design
            systems.
          </p>
          <p>
            I’m currently building product at{" "}
            <a href="https://kontentino.com/" target="_blank" rel="noreferrer">
              ✓Kontentino
            </a>
            .
          </p>
        </main>
      </article>
    </Layout>
  );
}
