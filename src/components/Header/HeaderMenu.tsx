import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ThemeSelector from "../ThemeController/ThemeSelector";
import { Divider } from "@mui/material";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { setDarkTheme, setLightTheme } from "@/store/reducers/theme";
import { useAppSelector } from "@/store/hooks/useAppSelector";

const MenuItems = [
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
  {
    component: <ThemeSelector />,
  },
];

const HeaderMenu = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const routePathname = usePathname();
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    function handleResize() {
      if (window !== undefined) setWindowWidth(window.innerWidth);
    }

    if (window !== undefined) {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
  }, []);

  function changeTheme() {
    switch (theme) {
      case "light":
        return dispatch(setDarkTheme());
      default:
        return dispatch(setLightTheme());
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  if (windowWidth <= 920) {
    return (
      <Container>
        <ButtonStyled
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </ButtonStyled>
        <MenuStyled
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {MenuItems.map(({ name, route, component }, index) => {
            if (name && route) {
              return (
                <MenuItemStyled key={index} onClick={() => router.push(route)}>
                  {name}
                </MenuItemStyled>
              );
            }
            return (
              <div key={index}>
                <Divider />
                <MenuItemStyled onClick={changeTheme}>
                  {component}
                </MenuItemStyled>
              </div>
            );
          })}
        </MenuStyled>
      </Container>
    );
  }
  return (
    <NavContainer>
      <NavList>
        {MenuItems.map(({ name, route, component }, index) => {
          if (route && name) {
            return (
              <NavItem key={index}>
                <Link
                  href={route}
                  className={routePathname === `${route}` ? "active" : ""}
                >
                  {name}
                </Link>
              </NavItem>
            );
          }
          return <div key={index}>{component}</div>;
        })}
      </NavList>
    </NavContainer>
  );
};

const Container = styled.div`
  & .MuiPopover-root {
    background: none;
  }
  @media (max-width: 370px) {
    margin-bottom: 32px;
  }
`;

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 6px;
  border: none;
  background-color: #eee;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  transition: 0.1s;
  color: #000;
  font-size: 1.25rem;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;

const MenuStyled = styled(Menu)`
  & .MuiList-root {
    width: 180px;
  }
`;

const MenuItemStyled = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 8px;
  &.MuiButtonBase-root {
    padding: 8px 16px;
  }
  &.logout {
    color: #f55;
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

export default HeaderMenu;
