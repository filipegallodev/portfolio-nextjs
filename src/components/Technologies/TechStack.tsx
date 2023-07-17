import React from "react";
import NextIcon from "@/../../public/assets/logos/nextjs-logo.svg";
import ExpressIcon from "@/../../public/assets/logos/express-logo.svg";
import TypeScriptIcon from "@/../../public/assets/logos/typescript-logo.svg";
import NodeJsIcon from "@/../../public/assets/logos/nodejs-logo.svg";
import StyledComponentsIcon from "@/../../public/assets/logos/styled-components-logo.svg";
import ReduxIcon from "@/../../public/assets/logos/redux-logo.svg";
import Image from "next/image";
import styled from "styled-components";

const TechStack = () => {
  return (
    <Container>
      <Title>Main Stack:</Title>
      <TechContainer>
        <ImageStyled src={NextIcon} alt="Next.js" title="Next.js" />
        <ImageStyled src={TypeScriptIcon} alt="TypeScript" title="TypeScript" />
        <ImageStyled src={NodeJsIcon} alt="Node.js" title="Node.js" />
        <ImageStyled src={ExpressIcon} alt="Express" title="Express" />
        <ImageStyled src={ReduxIcon} alt="Redux.js" title="Redux.js" />
        <ImageStyled
          src={StyledComponentsIcon}
          alt="Styled-components"
          title="Styled-components"
        />
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
  @media (max-width: 640px) {
    margin: 0 auto;
  }
`;

const TechContainer = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ImageStyled = styled(Image)`
  max-width: 48px;
  max-height: 48px;
`;

export default TechStack;
