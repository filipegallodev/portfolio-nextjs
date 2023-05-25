import React from "react";
import styled from "styled-components";

const SectionTitle = ({ children }: { children: string }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h2`
  text-align: center;
  color: var(--main-color);
  text-transform: uppercase;
  font-size: 1.85rem;
  margin: 48px 0;
`;

export default SectionTitle;
