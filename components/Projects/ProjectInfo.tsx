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
    <div className="animeLeft">
      <Back onClick={() => router.back()}>← Lista</Back>
      <Container>
        <ImageContainer>
          {imageLoading && <ImageSkeleton />}
          <Image
            src={imageUrl}
            alt={name}
            onLoad={() => setImageLoading(false)}
          />
        </ImageContainer>
        <div>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <TechnologiesContainer>
            <SubTitle>Tecnologias</SubTitle>
            <TechnologiesList>
              {technologies.map((technology) => (
                <TechnologiesCard key={technology}>
                  {technology}
                </TechnologiesCard>
              ))}
            </TechnologiesList>
          </TechnologiesContainer>
          <div>
            <SubTitle>Links</SubTitle>
            <a href={test} target="_blank" rel="noreferrer">
              <LinkButton>Teste</LinkButton>{" "}
            </a>
            {github ? (
              <a href={github} target="_blank" rel="noreferrer">
                <LinkButton>Respositório</LinkButton>{" "}
              </a>
            ) : (
              <span>Repositório no GitHub indisponível para este projeto.</span>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 0px 32px 96px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Back = styled.button`
  margin: 32px;
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
  max-width: 900px;
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

const Name = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  color: var(--main-color);
`;

const Description = styled.p`
  font-size: 1.25rem;
`;

const TechnologiesContainer = styled.div`
  margin: 64px 0;
`;

const SubTitle = styled.h3`
  color: var(--main-text-color);
  font-size: 1.5rem;
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
  font-size: 1.125rem;
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
  font-size: 1.125rem;
  font-weight: 500;
  transition: 0.1s;
  cursor: pointer;
  opacity: 0.85;
  &:hover {
    border-right: var(--main-color) 4px solid;
    padding-right: 20px;
    background-color: rgb(255, 208, 18);
    opacity: 1;
  }
`;

export default ProjectInfo;
