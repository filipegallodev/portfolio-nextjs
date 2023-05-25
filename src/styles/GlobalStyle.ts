import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};
    padding: 0px;
    margin: 0px;
  }
`;

export default GlobalStyle;
