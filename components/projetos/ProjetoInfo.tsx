import React from "react";

import styles from "../../styles/projetoinfo.module.css";

const ProjetoInfo = ({ setProjeto, projeto }: any) => {
  function previousButton() {
    setProjeto(null);
  }

  return (
    <div className={styles.projeto + " animeLeft"}>
      <h2>{projeto.name}</h2>
      <p>{projeto.description}</p>
      <button onClick={previousButton}>Voltar</button>
    </div>
  );
};

export default ProjetoInfo;
