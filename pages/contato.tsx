import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Form from "../components/Form";
import linkedinLogo from "../public/assets/logos/linkedin-logo.svg";
import githubLogo from "../public/assets/logos/github-logo.svg";
import styles from "../styles/contato.module.css";

const Contato = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Contato</title>
        <meta name="description" content="Entre em contato comigo." />
      </Head>

      <Header />

      <main className="animeLeft">
        <div className={styles.contato}>
          <h2>Conecte-se comigo</h2>
          <div className={styles.meiosDeContato}>
            <div>
              <h3>Envie um e-mail</h3>
              <Form />
            </div>
            <div className={styles.redes}>
              <h3>Minhas redes</h3>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/filipegallo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedinLogo} alt="LinkedIn" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/filipegallodev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={githubLogo} alt="GitHub" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Contato;
