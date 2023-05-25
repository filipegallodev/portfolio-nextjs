"use client";

import DarkTheme from "../styles/DarkTheme";
import LightTheme from "../styles/LightTheme";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./hooks/useAppSelector";

export default function ReduxThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
}
