import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Projetos = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Projetos</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">Projetos</main>
    </React.Fragment>
  );
};

export default Projetos;
