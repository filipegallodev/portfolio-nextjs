import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const ProjectCard = (project: IProject) => {
  const { id, name, imageUrl } = project;
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  function handleProject(event: React.MouseEvent) {
    if (event.currentTarget.parentElement) {
      const projectId = event.currentTarget.parentElement.getAttribute("id");
      if (projectId) router.push(`projetos/${projectId}`);
    }
  }

  return (
    <Card className="animeLeft" id={id}>
      <ImageContainer onClick={handleProject}>
        {imageLoading && <ImageSkeleton />}
        <Image
          src={imageUrl}
          alt={name}
          onLoad={() => setImageLoading(false)}
        />
      </ImageContainer>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  width: 520px;
  max-height: 292px;
  height: 100%;
  border: 2px solid rgba(220, 20, 87, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(220, 20, 87, 0.5);
  overflow: hidden;
  transition: 0.1s;
  &:hover {
    background-color: rgba(220, 20, 87, 0.5);
    box-shadow: 0 0 8px rgba(220, 20, 87, 0.5);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  & img {
    grid-area: 1/1;
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      opacity: 0.75;
    }
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

export default ProjectCard;
