import Image from "next/image";
import React from "react";
import ProjetoInfo from "./ProjetoInfo";
import { Projeto } from "./ProjetoInfo";

import styles from "../../styles/projetocard.module.css";

const ProjetoCard = () => {
  const [projeto, setProjeto] = React.useState<Projeto | null>();
  const [listaProjetos, setListaProjetos] = React.useState([]);

  React.useEffect(() => {
    fetch("./projetos.json")
      .then((res) => res.json())
      .then((data) => setListaProjetos(data));
  }, []);

  function handleClick({ target }: any) {
    const projetoEscolhido = target.parentElement.getAttribute("id");

    const projetoProps = listaProjetos.filter((item: Projeto) => {
      return (
        item.id === projetoEscolhido && {
          id: item.id,
          name: item.name,
          desc: item.description,
        }
      );
    });

    setProjeto(projetoProps[0]);
  }

  return (
    <React.Fragment>
      {projeto ? (
        <ProjetoInfo setProjeto={setProjeto} projeto={projeto} />
      ) : (
        <div className={styles.projetosContainer}>
          {listaProjetos.map(({ id, name, imageUrl }) => (
            <div
              className={styles.projetoCard + " animeLeft"}
              onClick={handleClick}
              id={id}
              key={id}
            >
              <Image src={imageUrl} alt={name} onClick={handleClick} />
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default ProjetoCard;
