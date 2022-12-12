import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";

import styles from "../styles/contato.module.css";

import linkedinLogo from "../public/assets/logos/linkedin-logo.svg";
import githubLogo from "../public/assets/logos/github-logo.svg";

const Contato = () => {
  const [titulo, setTitulo] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  function enviarEmail() {
    if (titulo !== "" && mensagem !== "") {
      window.open(
        `mailto:filipegallodev@hotmail.com?subject=${titulo}&body=${mensagem}`
      );
    }
  }

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
              <form className={styles.form} onSubmit={enviarEmail}>
                <div className={styles.titulo}>
                  <label htmlFor="titulo">Assunto:</label>
                  <input
                    className="titulo"
                    type="text"
                    id="titulo"
                    placeholder="Título"
                    required
                    onChange={({ target }) => setTitulo(target.value)}
                  />
                </div>
                <div className={styles.mensagem}>
                  <label htmlFor="mensagem">Mensagem:</label>
                  <textarea
                    className="mensagem"
                    id="mensagem"
                    cols={30}
                    rows={10}
                    placeholder="Conteúdo da mensagem..."
                    required
                    onChange={({ target }) => setMensagem(target.value)}
                  ></textarea>
                </div>
                <div>
                  <button>Enviar</button>
                </div>
              </form>
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
