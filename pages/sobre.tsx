import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Tecnologias from "../components/tecnologias/Tecnologias";

import styles from "../styles/sobre.module.css";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Sobre</title>
        <meta name="description" content="Sobre mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <div className={styles.sobre}>
          <div className={styles.texto}>
            <h2>Um pouco sobre mim</h2>
            <p>
              Sou um Desenvolvedor Front-End, estou sempre me dedicando todos os
              dias para evoluir cada vez mais e conseguir contribuir de alguma
              forma com a comunidade.
            </p>
            <p>
              Gosto bastante de desenvolver aplicações web variadas para me
              desafiar e treinar meus conhecimentos técnicos.
            </p>
            <p>
              Atualmente, em meu estágio, participo ativamente no
              desenvolvimento de uma aplicação web completa, desde o front-end
              do sistema até o banco de dados, buscando sempre entregar o melhor
              para o cliente/usuário.
            </p>
            <p>
              Sinta-se à vontade para se conectar e conversar comigo por meio
              dos meus contatos!
            </p>
          </div>
          <div className={styles.verticalLine}></div>
          <div>
            <h2>Tecnologias</h2>
            <Tecnologias />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Sobre;
