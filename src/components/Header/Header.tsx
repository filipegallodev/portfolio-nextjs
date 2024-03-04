import React from "react";
import Image from "next/image";
import DevLogo from "../../../public/assets/img/dev.png";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <LogoMenuContainer>
          <Logo>
            Filipe Gallo
            <Image src={DevLogo} alt="Logo Dev" className="dev-icon" />
          </Logo>
          <HeaderMenu />
        </LogoMenuContainer>
      </Container>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: #000;
  box-shadow: 0 0 10px #000;
`;

const Container = styled.div`
  max-width: 1200px;
  min-height: 120px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1200px) {
    margin: 0 24px;
  }
`;

const LogoMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 500px) {
    width: 100%;
    gap: 0px;
    justify-content: space-around;
  }
  @media (max-width: 370px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  gap: 0.5rem;
  font-size: 2rem;
  color: var(--specific-text-color);
  cursor: default;
  & .dev-icon {
    width: 2.125rem;
    height: auto;
  }
  @media (max-width: 800px) {
    justify-content: flex-start;
    margin: 32px 0;
    width: 100%;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
    font-size: 1.75rem;
  }
  @media (max-width: 370px) {
    font-size: 2rem;
    justify-content: center;
  }
`;

export default Header;
