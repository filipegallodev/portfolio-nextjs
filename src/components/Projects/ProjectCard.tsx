import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const maxTechs = 3;

const ProjectCard = (project: IProject) => {
  const router = useRouter();
  const { id, name, imageUrl, technologies } = project;
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  return (
    <Card
      className="animeLeft"
      id={id}
      onClick={() => router.push(`/projetos/${id}`)}
    >
      <ImageContainer>
        {imageLoading && <ImageSkeleton />}
        <ImageStyled
          src={imageUrl}
          alt={name}
          onLoad={() => setImageLoading(false)}
        />
      </ImageContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <TechContainer>
          {technologies.map((tech, index) => {
            if (index < maxTechs) {
              return <TechCard key={tech}>{tech}</TechCard>;
            }
            if (index === maxTechs) {
              return <TechCard key="...">...</TechCard>;
            }
          })}
        </TechContainer>
      </InfoContainer>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 380px;
  max-height: 292px;
  height: 100%;
  border: 2px solid rgba(220, 20, 87, 0.5);
  border-radius: 6px;
  box-shadow: 0 0 2px rgba(220, 20, 87, 0.5);
  overflow: hidden;
  transition: 0.1s;
  &:hover {
    background-color: rgba(220, 20, 87, 0.35);
    box-shadow: 0 0 4px rgba(220, 20, 87, 0.35);
    filter: #232332;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

const ImageStyled = styled(Image)`
  grid-area: 1/1;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.75;
  }
`;

const InfoContainer = styled.div`
  border-top: 1px solid rgba(220, 20, 87, 0.5);
  padding: 8px;
  background: ${(props) => props.theme.color.tech.container};
  cursor: pointer;
`;

const Name = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #dc1457;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechCard = styled.div`
  list-style: none;
  background-color: ${(props) => props.theme.color.tech.card};
  padding: 6px;
  border-radius: 4px;
  font-size: 0.875rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.color.text};
  font-weight: 500;
`;

const SkeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const ImageSkeleton = styled.div`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${SkeletonAnimation} 1.5s infinite linear;
`;

export default ProjectCard;
