import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo - Sobre</title>
      </Head>

      <Header />

      <main>Tela sobre</main>

      <footer></footer>
    </React.Fragment>
  );
};

export default Sobre;
