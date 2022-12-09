import React from "react";

import styles from "../../styles/projetocard.module.css";

const projetos = [
  {
    name: "Projeto 1",
    id: "projeto1",
    desc: "Topzera",
  },
  {
    name: "Projeto 2",
    id: "projeto2",
    desc: "Topzera demais esse também",
  },
  {
    name: "Projeto 3",
    id: "projeto3",
    desc: "Mais um muito topzera",
  },
];

const ProjetoCard = () => {
  const [projeto, setProjeto] = React.useState<any>();

  function handleClick({ target }: any) {
    const projetoEscolhido = target.getAttribute("id");

    const projetoProps = projetos.filter((item) => {
      return (
        item.id === projetoEscolhido && {
          name: item.name,
          id: item.id,
          desc: item.desc,
        }
      );
    });

    setProjeto(projetoProps[0]);
  }

  function previousButton() {
    setProjeto(null);
  }

  return (
    <React.Fragment>
      {projeto ? (
        <div className={styles.projeto + " animeLeft"}>
          <h2>{projeto.name}</h2>
          <p>{projeto.desc}</p>
          <button onClick={previousButton}>Voltar</button>
        </div>
      ) : (
        <div className={styles.projetosContainer}>
          {projetos &&
            projetos.map(({ name, id }) => (
              <div
                className={styles.projetoCard + " animeLeft"}
                onClick={handleClick}
                id={id}
                key={id}
              >
                {name}
              </div>
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default ProjetoCard;
