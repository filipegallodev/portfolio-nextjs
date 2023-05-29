import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectSkeleton = () => {
  return (
    <Container>
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
    </Container>
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

const SkeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const ImageSkeleton = styled.div`
  width: 380px;
  height: 216px;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(220, 20, 87, 0.5);
  animation: ${SkeletonAnimation} 1.5s infinite linear;
`;

export default ProjectSkeleton;
