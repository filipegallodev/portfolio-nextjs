import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Projetos = () => {
  return (
    <div>
      <Head>
        <title>Filipe Gallo | Projetos</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">Projetos</main>
    </div>
  );
};

export default Projetos;
