import {createGlobalStyle} from "styled-components";
import bg from "./../../images/bg.jpg";

export const theme = {}

export const GlobalStyles = createGlobalStyle`  
    * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6,p { 
    margin: 0;
    padding: 0;
    font-family: "Space Mono", Arial, serif;
    font-weight: 400;
  }

  body {
    font-family: 'Patrick Hand', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${bg});
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`