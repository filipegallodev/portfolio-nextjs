import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";

import styles from "../styles/home.module.css";

import filipeFoto from "../public/assets/img/foto-filipe.webp";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Desenvolvedor Front-End</title>
        <meta
          name="description"
          content="Site oficial do Desenvolvedor Front-End Filipe Gallo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="animeLeft">
        <div className={styles.home}>
          <div>
            <h1>Filipe Gallo</h1>
            <span>
              Desenvolvedor <strong>Front-End</strong>
            </span>
          </div>
          <Image src={filipeFoto} alt="Foto de Filipe Gallo" />
        </div>
      </main>

      <footer></footer>
    </React.Fragment>
  );
}
