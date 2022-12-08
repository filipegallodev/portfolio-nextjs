import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Sobre</title>
        <meta name="description" content="Sobre mim." />
      </Head>
      <Header />
      <main className="animeLeft">Sobre</main>
    </React.Fragment>
  );
};

export default Sobre;
