import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const ProjectInfo = (project: IProject) => {
  const { name, description, technologies, test, github, imageUrl } = project;
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  if (!project) return null;
  return (
    <Container>
      <Back onClick={() => router.back()}>← Lista</Back>
      <ImageContainer>
        {imageLoading && <ImageSkeleton />}
        <Image
          src={imageUrl}
          alt={name}
          onLoad={() => setImageLoading(false)}
        />
      </ImageContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <SubTitle>Tecnologias</SubTitle>
      <TechnologiesList>
        {technologies.map((technology) => (
          <TechnologiesCard key={technology}>{technology}</TechnologiesCard>
        ))}
      </TechnologiesList>
      <SubTitle>Links</SubTitle>
      <LinkButton>
        <a href={test} target="_blank" rel="noreferrer">
          Teste
        </a>
      </LinkButton>
      {github ? (
        <LinkButton>
          <a href={github} target="_blank" rel="noreferrer">
            Respositório
          </a>
        </LinkButton>
      ) : (
        <span>Repositório no GitHub indisponível para este projeto.</span>
      )}
    </Container>
  );
};

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto 96px auto;
  @media (max-width: 1210px) {
    margin: 0 24px 96px 24px;
  }
`;

const Back = styled.button`
  margin: 24px 0 24px 0;
  padding: 16px 48px;
  background-color: var(--main-color);
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 1.35rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ad003a;
  }
`;

const ImageContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  display: grid;
  overflow: hidden;
  border-radius: 4px;
  border: 2px solid rgba(220, 20, 87, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(220, 20, 87, 0.5);
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

const Title = styled.h2`
  margin-top: 24px;
  font-size: 1.75rem;
  color: var(--main-color);
`;

const Description = styled.p`
  font-size: 1.35rem;
`;

const SubTitle = styled.h3`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 48px;
`;

const TechnologiesList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TechnologiesCard = styled.li`
  list-style: none;
  background-color: var(--card-background-color);
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 1.25rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const LinkButton = styled.button`
  margin-bottom: 12px;
  display: block;
  padding: 10px 24px;
  background-color: var(--secundary-color);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
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

export default ProjectInfo;
