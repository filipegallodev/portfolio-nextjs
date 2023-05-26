import React from "react";
import NextIcon from "@/../../public/assets/logos/nextjs-logo.svg";
import JavaScriptIcon from "@/../../public/assets/logos/javascript-logo.svg";
import TypeScriptIcon from "@/../../public/assets/logos/typescript-logo.svg";
import ReactIcon from "@/../../public/assets/logos/react-logo.svg";
import StyledComponentsIcon from "@/../../public/assets/logos/styled-components-logo.svg";
import ReduxIcon from "@/../../public/assets/logos/redux-logo.svg";
import Image from "next/image";
import styled from "styled-components";

const TechStack = () => {
  return (
    <Container>
      <Title>Tech Stack:</Title>
      <TechContainer>
        <ImageStyled src={NextIcon} alt="Next.js" />
        <ImageStyled src={ReactIcon} alt="React.js" />
        <ImageStyled src={TypeScriptIcon} alt="TypeScript" />
        <ImageStyled src={JavaScriptIcon} alt="TypeScript" />
        <ImageStyled src={ReduxIcon} alt="Redux.js" />
        <ImageStyled src={StyledComponentsIcon} alt="Styled-components" />
      </TechContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 6px;
  color: #050505;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
`;

const TechContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ImageStyled = styled(Image)`
  max-width: 48px;
  max-height: 48px;
`;

export default TechStack;
