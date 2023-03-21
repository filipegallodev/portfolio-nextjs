import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const ProjectCard = (project: IProject) => {
  const { id, name, imageUrl } = project;
  const router = useRouter();

  function handleProject(event: React.MouseEvent) {
    if (event.currentTarget.parentElement) {
      const projetoEscolhido =
        event.currentTarget.parentElement.getAttribute("id");
      if (projetoEscolhido) router.push(`projetos/${projetoEscolhido}`);
    }
  }

  return (
    <Card className="animeLeft" id={id}>
      <Image src={imageUrl} alt={name} onClick={handleProject} />
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  width: 520px;
  height: auto;
  border: 2px solid rgba(220, 20, 87, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(220, 20, 87, 0.5);
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    background-color: rgba(220, 20, 87, 0.5);
    box-shadow: 0 0 8px rgba(220, 20, 87, 0.5);
  }
  & img {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.75;
    }
  }
`;

export default ProjectCard;
