import React, { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import styled from "styled-components";

const TechnologiesVersioning = () => {
  const [technologies, setTechnologies] = useState<Array<ITechnology>>();

  useEffect(() => {
    fetch("./techs/versioning.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <React.Fragment>
      <Container>
        {technologies &&
          technologies.map((technology) => (
            <TechnologyCard key={technology.name} {...technology} />
          ))}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 0;
`;

export default TechnologiesVersioning;
