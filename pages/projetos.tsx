import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import ProjetoCard from "../components/projetos/ProjetoCard";

const Projetos = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Projetos</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <div>
          <ProjetoCard />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Projetos;
