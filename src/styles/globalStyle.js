import { createGlobalStyle } from "styled-components";
import bgStars from "assets/images/bg-stars.jpg";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  *:focus, 
  *:active {
    outline: 0;
  }

  :root {
    --color-background: rgba(40, 39, 39, 0.7);
    --color-text-primary: #999999;
    --color-primary: rgb(255, 228, 0);
    --color-white: #ffffff;
    --color-black: #282727;

    --font-size-default: 1.6rem;
    --font-size-title: 2.6rem;
    --font-family-default: 'Poppins',  sans-serif;
 
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.4rem;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    background-color: var(--color-background);
    width: 0.2rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: var(--color-primary);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-family-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size-default);
    color: var(--color-text-primary);
    background-image: url(${bgStars});
    background-attachment: fixed;
    overflow-y: scroll;
  }

  button {
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
    appearance: none;
    color: inherit;
    border: none;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span, a {
    transition: color .7s cubic-bezier(.5,0,0,1);
  }
`;

export default GlobalStyle;
