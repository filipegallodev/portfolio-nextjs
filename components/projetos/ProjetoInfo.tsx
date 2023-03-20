import Image from "next/image";
import React from "react";

import styles from "../../styles/projetoinfo.module.css";

export interface Projeto {
  name: string;
  id: string;
  description: string;
  imageUrl: {
    src: string;
    width: number;
    height: number;
  };
  technologies: Array<string>;
  github: string;
  test: string;
}

interface Props {
  projeto: Projeto;
  setProjeto: any;
}

const ProjetoInfo = ({ setProjeto, projeto }: Props) => {
  function previousButton() {
    setProjeto(null);
  }

  return (
    <div className="animeLeft">
      <div className={styles.voltar}>
        <button onClick={previousButton}>← Lista</button>
      </div>

      <div className={styles.projeto}>
        <div className={styles.capa}>
          <Image src={projeto.imageUrl} alt={projeto.name} />
        </div>
        <div className={styles.projetoDesc}>
          <h2>{projeto.name}</h2>
          <p>{projeto.description}</p>
          <div className={styles.tecnologias}>
            <h3>Tecnologias</h3>
            <ul>
              {projeto.technologies.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Links</h3>
            <a href={projeto.test} target="_blank" rel="noreferrer">
              <button>Teste</button>{" "}
            </a>
            {projeto.github ? (
              <a href={projeto.github} target="_blank" rel="noreferrer">
                <button>Respositório</button>{" "}
              </a>
            ) : (
              <span>Repositório no GitHub indisponível para este projeto.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoInfo;
