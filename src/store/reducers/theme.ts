import { createSlice } from "@reduxjs/toolkit";

function getLocalStorageTheme(): string {
  if (typeof window !== "undefined") {
    const savedTheme = window.localStorage.getItem("user-theme");
    if (savedTheme) return savedTheme;
  }
  return "dark";
}

const initialState = {
  theme: getLocalStorageTheme(),
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.theme = "dark";
      localStorage.setItem("user-theme", "dark");
    },
    setLightTheme: (state) => {
      state.theme = "light";
      localStorage.setItem("user-theme", "light");
    },
  },
});

export const { setDarkTheme, setLightTheme } = slice.actions;

export default slice.reducer;
