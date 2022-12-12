import Image from "next/image";
import React from "react";

import styles from "../../styles/projetoinfo.module.css";

const ProjetoInfo = ({ setProjeto, projeto }: any) => {
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
              {projeto.technologies.map((tecnologia: any) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </div>
          <div className={styles.botaoExterno}>
            <a href={projeto.test} target="_blank" rel="noreferrer">
              <button>Teste</button>{" "}
            </a>
            <a href={projeto.github} target="_blank" rel="noreferrer">
              <button>Respositório</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoInfo;
