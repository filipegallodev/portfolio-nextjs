import Image from "next/image";
import React from "react";

import styles from "../../styles/projetocard.module.css";
import ProjetoInfo from "./ProjetoInfo";

const ProjetoCard = () => {
  const [projeto, setProjeto] = React.useState<any>();
  const [listaProjetos, setListaProjetos] = React.useState([]);

  React.useEffect(() => {
    fetch("./projetos.json")
      .then((res) => res.json())
      .then((data) => setListaProjetos(data));
  }, []);

  function handleClick({ target }: any) {
    const projetoEscolhido = target.parentElement.getAttribute("id");

    const projetoProps = listaProjetos.filter((item: any) => {
      return (
        item.id === projetoEscolhido && {
          id: item.id,
          name: item.name,
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
        <ProjetoInfo setProjeto={setProjeto} projeto={projeto} />
      ) : (
        <div className={styles.projetosContainer}>
          {listaProjetos.map(({ id, name, description, imageUrl }) => (
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
