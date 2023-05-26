import React, { useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const [listaProjetos, setListaProjetos] = React.useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setListaProjetos(data);
    }
    fetchProjects();
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
  margin: 48px 0px;
`;

export default ProjectContainer;
