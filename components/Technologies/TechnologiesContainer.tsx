import React from "react";
import styled from "styled-components";
import TechnologyCard from "./TechnologyCard";

const TechnologiesContainer = () => {
  const [technologies, setTechnologies] = React.useState<Array<ITechnology>>();

  React.useEffect(() => {
    fetch("./technologies.json")
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default TechnologiesContainer;
