import React from "react";
import styled from "styled-components";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

const SectionStyled = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 96px;
  @media (max-width: 1240px) {
    margin: 0 24px;
  }
`;

export default Section;
