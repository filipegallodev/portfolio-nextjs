"use client";

import { useAppSelector } from "@/store/hooks/useAppSelector";
import DarkTheme from "@/styles/DarkTheme";
import LightTheme from "@/styles/LightTheme";
import { ThemeProvider } from "styled-components";

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
