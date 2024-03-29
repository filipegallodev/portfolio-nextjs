import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ProjectTags from "../ProjectTags/ProjectTags";

const ProjectInfo = (project: IProject) => {
  const { name, description, technologies, test, github, imageUrl, tags } =
    project;
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  if (!project) return null;
  return (
    <Container>
      <Back onClick={() => router.back()}>
        <KeyboardBackspaceIcon fontSize="large" />
      </Back>
      <ImageContainer>
        {imageLoading && <ImageSkeleton />}
        <Image
          src={imageUrl}
          alt={name}
          onLoad={() => setImageLoading(false)}
        />
      </ImageContainer>
      <ProjectInformationHeader>
        <Title>{name}</Title>
      </ProjectInformationHeader>
      <ProjectTags tags={tags} />
      <Description>{description}</Description>
      <SubTitle>Tecnologias</SubTitle>
      <TechnologiesList>
        {technologies.map((technology) => (
          <TechnologiesCard key={technology}>{technology}</TechnologiesCard>
        ))}
      </TechnologiesList>
      <SubTitle>Links</SubTitle>
      <LinksContainer>
        {test ? (
          <LinkButton href={test} target="_blank" rel="noreferrer">
            Teste
          </LinkButton>
        ) : (
          <WithoutLink>
            O link para teste estará disponível em breve.
          </WithoutLink>
        )}
        {github ? (
          <LinkButton href={github} target="_blank" rel="noreferrer">
            Respositório
          </LinkButton>
        ) : (
          <WithoutLink>
            Repositório indisponível para projetos profissionais.
          </WithoutLink>
        )}
      </LinksContainer>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto 96px auto;
  @media (max-width: 1010px) {
    margin: 0 24px 96px 24px;
  }
`;

const Back = styled.button`
  margin: 24px 0;
  display: flex;
  padding: 8px 36px;
  background-color: var(--main-color);
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 1.35rem;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: var(--main-color-hover);
  }
`;

const ImageContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  display: grid;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.color.tech.border};
  border-radius: 8px;
  box-shadow: 0 0 4px ${(props) => props.theme.color.tech.border};
  & img {
    grid-area: 1/1;
    width: 100%;
    height: auto;
  }
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

const ProjectInformationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0px 12px 0px;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: var(--main-color);
`;

const Description = styled.p`
  font-size: 1.35rem;
  line-height: 1.75rem;
`;

const SubTitle = styled.h3`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: 500;
  margin: 48px 0px 12px 0px;
`;

const TechnologiesList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TechnologiesCard = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.color.tech.card};
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1.25rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.color.text};
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LinkButton = styled.a`
  margin-bottom: 12px;
  padding: 10px 24px;
  background-color: var(--secundary-color);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    border-right: var(--main-color) 4px solid;
    padding-right: 20px;
    background-color: rgb(255, 208, 18);
  }
`;

const WithoutLink = styled.p`
  margin-bottom: 8px;
`;

export default ProjectInfo;
