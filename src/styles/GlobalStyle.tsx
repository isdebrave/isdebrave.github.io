import { Global, css } from "@emotion/react";
import React from "react";

const defaultStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
    background-color: #eeebe0;
  }

  html {
    scroll-behavior: smooth;
  }

  li {
    list-style: none;
    color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
