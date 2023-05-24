import React from "react";
import styled from "styled-components";

const SubTitle = ({ children }: { children: string }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h3`
  font-size: 1.65rem;
  color: var(--main-color);
  margin: 40px auto;
`;

export default SubTitle;
