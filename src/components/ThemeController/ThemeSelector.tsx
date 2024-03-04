import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { setDarkTheme, setLightTheme } from "@/store/reducers/theme";
import styled from "styled-components";
import Brightness4TwoToneIcon from "@mui/icons-material/Brightness4TwoTone";
import Brightness5TwoToneIcon from "@mui/icons-material/Brightness5TwoTone";

const ThemeSelector = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const [themeIcon, setThemeIcon] = useState<JSX.Element>(
    <Brightness4TwoToneIcon
      fontSize="large"
      onClick={() => dispatch(setLightTheme())}
    />
  );

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
    <ThemeContainer>{themeIcon}</ThemeContainer>
  );
};

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export default ThemeSelector;
