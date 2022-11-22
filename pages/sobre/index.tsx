import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";

const Sobre = () => {
  return (
    <div className="primary-container">
      <Head>
        <title>Filipe Gallo - Sobre</title>
      </Head>

      <Header />

      <main>Tela sobre</main>
    </div>
  );
};

export default Sobre;
