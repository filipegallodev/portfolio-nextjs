import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tecnologias from "../components/tecnologias/Tecnologias";

import styles from "../styles/sobre.module.css";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sobre | Filipe Gallo</title>
        <meta name="description" content="Sobre mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <div className={styles.sobre}>
          <div className={styles.texto}>
            <h2>Um pouco sobre mim</h2>
            <p>
              Hello, World! Sou Desenvolvedor Front-End, tenho 23 anos e sou do
              estado de São Paulo! Estou sempre focado na evolução constante
              todos os dias, visando melhorar como desenvolvedor, em suas
              diversas atividades envolvidas. Tenho o sonho e objetivo de
              trabalhar na área e fazer o que mais gosto, desenvolver aplicações
              belas e funcionais.
            </p>
            <p>
              Atualmente, faço faculdade de Análise e Desenvolvimento de
              Sistemas na UNINTER e faço estágio na área.
            </p>
            <p>
              Em meu tempo livre gosto de estar estudando, seja em cursos ou
              aprendendo na prática algo acompanhando a documentação. Além
              disso, sempre estou desenvolvendo algum projeto real, para colocar
              em prática todo o conhecimento adquirido e expor o que consigo
              fazer.
            </p>
            <p>
              Gosto muito de aprofundar conhecimentos em tecnologias que já faço
              uso, para poder tirar o maior proveito e potencial da ferramenta.
            </p>
            <p>
              Enfim, por hora é isso! Sinta-se à vontade para se conectar e
              conversar comigo por meio dos meus contatos! Ficarei feliz em me
              conectar com você e respondê-lo{"("}a{")"}.
            </p>
          </div>
          <div className={styles.verticalLine}></div>
          <div>
            <h2>Tecnologias</h2>
            <Tecnologias />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Sobre;
