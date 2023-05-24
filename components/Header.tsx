import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DevLogo from "../public/assets/img/dev.png";
import styled from "styled-components";
import changeTheme from "../helper/changeTheme";
import Brightness4TwoToneIcon from "@mui/icons-material/Brightness4TwoTone";
import Brightness5TwoToneIcon from "@mui/icons-material/Brightness5TwoTone";

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
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("user-theme");
    if (savedTheme === "light") return setTheme(changeTheme("dark"));
    if (savedTheme === "dark") return setTheme(changeTheme("light"));
  }, []);

  return (
    <header>
      <Container>
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
        <ThemeContainer>
          {theme === "dark" ? (
            <Brightness4TwoToneIcon
              fontSize="large"
              onClick={() => setTheme(changeTheme("dark"))}
            />
          ) : (
            <Brightness5TwoToneIcon
              sx={{ color: "yellow" }}
              fontSize="large"
              onClick={() => setTheme(changeTheme("light"))}
            />
          )}
        </ThemeContainer>
      </Container>
    </header>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #000;
  padding: 32px;
  box-shadow: 0 0 10px #000;
  @media (max-width: 1100px) {
    gap: 32px;
  }
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2rem;
  color: var(--specific-text-color);
  & .dev-icon {
    width: 2rem;
    height: auto;
  }
  @media (max-width: 1100px) {
    margin: 32px 0;
    width: 100%;
  }
`;

const NavContainer = styled.nav`
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 1.35rem;
  font-weight: 500;
  color: #bbb;
  transition: 0.3s;
  &:hover {
    color: var(--secundary-color);
  }
  & .active {
    color: var(--secundary-color);
  }
  @media (max-width: 500px) {
    font-size: 1.25rem;
    font-weight: 400;
    padding: 4px 4px 4px 0px;
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
