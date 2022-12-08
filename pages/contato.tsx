import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Contato = () => {
  return (
    <div>
      <Head>
        <title>Filipe Gallo | Contato</title>
        <meta name="description" content="Entre em contato comigo." />
      </Head>
      <Header />
      <main className="animeLeft">Contato</main>
    </div>
  );
};

export default Contato;
