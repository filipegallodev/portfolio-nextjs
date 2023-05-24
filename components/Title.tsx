import React from "react";
import styled from "styled-components";

const Title = ({ children }: { children: string }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h1`
  text-align: center;
  color: var(--main-color);
  font-size: 1.85rem;
  margin: 48px 0;
`;

export default Title;
