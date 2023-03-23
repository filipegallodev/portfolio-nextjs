import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const [listaProjetos, setListaProjetos] = React.useState([]);

  React.useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setListaProjetos(data));
  }, []);

  return (
    <React.Fragment>
      <Container>
        {listaProjetos.map((project: IProject) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin: 48px 32px;
`;

export default ProjectContainer;
