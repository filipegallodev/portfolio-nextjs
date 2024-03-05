import React from "react";
import styled from "styled-components";

type Tags = {
  name: string;
  id: string;
};

const ProjectTags = ({ tags }: { tags: Array<Tags> }) => {
  return (
    <TagsContainer>
      {tags.map(({ name, id }) => (
        <TagCard key={id} className={id}>
          {name}
        </TagCard>
      ))}
    </TagsContainer>
  );
};

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px;
  margin: 8px 0px;
`;

const TagCard = styled.span`
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  &.pessoal {
    background-color: #f09000;
    color: #000;
  }
  &.profissional {
    background-color: #f00000;
    color: #f5f5f5;
  }
  &.curso {
    background-color: #d400f0;
    color: #f5f5f5;
  }
  &.desenvolvimento {
    background-color: #0084f0;
    color: #f5f5f5;
  }
  &.finalizado {
    background-color: #00f000;
    color: #111;
  }
`;

export default ProjectTags;
