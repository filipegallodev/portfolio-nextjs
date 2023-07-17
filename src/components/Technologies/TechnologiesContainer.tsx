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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 0;
`;

export default TechnologiesContainer;
