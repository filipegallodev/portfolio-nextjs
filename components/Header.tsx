import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DevLogo from "../public/assets/img/dev.png";
import styled from "styled-components";
import Brightness4TwoToneIcon from "@mui/icons-material/Brightness4TwoTone";
import Brightness5TwoToneIcon from "@mui/icons-material/Brightness5TwoTone";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setDarkTheme, setLightTheme } from "../store/reducers/theme";
import { useAppSelector } from "./hooks/useAppSelector";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Sobre",
    route: "/sobre",
  },
  {
    name: "Projetos",
    route: "/projetos",
  },
  {
    name: "Contato",
    route: "/contato",
  },
];

const Header = () => {
  const router = useRouter();
  const routePathname = router.pathname;
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const [themeIcon, setThemeIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (theme) {
      case "light":
        return setThemeIcon(
          <Brightness5TwoToneIcon
            sx={{ color: "yellow" }}
            fontSize="large"
            onClick={() => dispatch(setDarkTheme())}
          />
        );
      default:
        return setThemeIcon(
          <Brightness4TwoToneIcon
            fontSize="large"
            onClick={() => dispatch(setLightTheme())}
          />
        );
    }
  }, [theme, dispatch]);

  return (
    <HeaderStyled>
      <Container>
        <LogoMenuContainer>
          <Logo>
            Filipe Gallo
            <Image src={DevLogo} alt="Logo Dev" className="dev-icon" />
          </Logo>
          <NavContainer>
            <NavList>
              {routes.map(({ name, route }) => (
                <NavItem key={name}>
                  <Link
                    href={route}
                    className={routePathname === `${route}` ? "active" : ""}
                  >
                    {name}
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </NavContainer>
        </LogoMenuContainer>
        <ThemeContainer>{themeIcon}</ThemeContainer>
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
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    margin: 0 24px;
    gap: 32px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 24px;
  }
`;

const LogoMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  gap: 0.5rem;
  font-size: 2rem;
  color: var(--specific-text-color);
  cursor: default;
  & .dev-icon {
    width: 2.125rem;
    height: auto;
  }
  @media (max-width: 800px) {
    margin: 32px 0;
    width: 100%;
  }
`;

const NavContainer = styled.nav`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 1.35rem;
  text-transform: uppercase;
  color: #ddd;
  transition: 0.1s;
  &:hover {
    color: var(--secundary-color);
  }
  & .active {
    color: var(--secundary-color);
  }
`;

const ThemeContainer = styled.div`
  & svg {
    opacity: 0.9;
    border-radius: 50%;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

export default Header;