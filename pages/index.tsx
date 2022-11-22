import Head from "next/head";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="primary-container">
      <Head>
        <title>Filipe Gallo - Desenvolvedor Front-End</title>
        <meta
          name="description"
          content="Site oficial do Desenvolvedor Front-End Filipe Gallo com portfólio de projetos e outras informações."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>Tela inicial</main>
    </div>
  );
}
