import Image from "next/image";
import React from "react";

import styles from "../../styles/tecnologias.module.css";

interface Tecnologias {
  name: string;
  imageUrl: {
    src: string;
    width: number;
    height: number;
  };
}

const Tecnologias = () => {
  const [skills, setSkills] = React.useState<Array<Tecnologias>>();

  React.useEffect(() => {
    fetch("./tecnologias.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <React.Fragment>
      <ul className={styles.tecnologias}>
        {skills &&
          skills.map(({ name, imageUrl }: any) => (
            <li key={name}>
              <Image src={imageUrl} alt={name} />
              <span>{name}</span>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default Tecnologias;
