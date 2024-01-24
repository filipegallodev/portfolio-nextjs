import React from "react";
import styled from "styled-components";
import VerticalAlignTopRoundedIcon from "@mui/icons-material/VerticalAlignTopRounded";

const BackToTop = () => {
  return (
    <Container>
      <ButtonStyled
        onClick={() =>
          window && window.scroll({ top: 0, left: 0, behavior: "smooth" })
        }
      >
        <VerticalAlignTopRoundedIcon fontSize="large" />
      </ButtonStyled>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0px;
`;

const ButtonStyled = styled.button`
  border-radius: 100%;
  border: none;
  background: var(--main-color);
  color: #fff;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background: var(--main-color-hover);
  }
`;

export default BackToTop;
