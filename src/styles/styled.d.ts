import "styled-components";
import DarkTheme from "./DarkTheme";

export type ITheme = typeof DarkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
