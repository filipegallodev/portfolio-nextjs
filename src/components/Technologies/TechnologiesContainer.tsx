import React from "react";
import styled from "styled-components";
import TechnologiesFrontEnd from "./TechnologiesFrontEnd";
import TechnologiesBackEnd from "./TechnologiesBackEnd";
import TechnologiesVersioning from "./TechnologiesVersioning";

const TechnologiesContainer = () => {
  return (
    <React.Fragment>
      <TechnologiesContainerTitle>Front-End</TechnologiesContainerTitle>
      <TechnologiesFrontEnd />
      <TechnologiesContainerTitle>Back-End</TechnologiesContainerTitle>
      <TechnologiesBackEnd />
      <TechnologiesContainerTitle>Versionamento</TechnologiesContainerTitle>
      <TechnologiesVersioning />
    </React.Fragment>
  );
};

const TechnologiesContainerTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--main-color);
  text-transform: uppercase;
  margin: 40px auto 20px auto;
`;

export default TechnologiesContainer;
