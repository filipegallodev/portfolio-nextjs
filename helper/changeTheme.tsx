export default function changeTheme(theme: string) {
  const docStyle = document.documentElement.style;
  let selectedTheme: string = "";

  if (theme === "light") {
    docStyle.setProperty("--main-text-color", "#f5f5f5");
    docStyle.setProperty("--main-background-color", "#050505");
    docStyle.setProperty("--card-text-color", "#f5f5f5");
    docStyle.setProperty("--card-background-color", "#252525");
    docStyle.setProperty("--form-border", "#dc1457");
    selectedTheme = "dark";
  }

  if (theme === "dark") {
    docStyle.setProperty("--main-text-color", "#050505");
    docStyle.setProperty("--main-background-color", "#f5f5f5");
    docStyle.setProperty("--card-text-color", "#222");
    docStyle.setProperty("--card-background-color", "#eee");
    docStyle.setProperty("--form-border", "#111");
    selectedTheme = "light";
  }

  localStorage.setItem("user-theme", selectedTheme);
  return selectedTheme;
}
