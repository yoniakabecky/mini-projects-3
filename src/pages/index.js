import React from "react";
import { createGlobalStyle } from "styled-components";
import data from "../../data.json";
import HomePage from "../components/HomePage";
import Meta from "../components/Meta";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: hsl(180, 52%, 96%);
    font-family: "spartan";
    font-size: 15px;
  }
`;

export default function Home() {
  return (
    <>
      <Meta />

      <GlobalStyle />

      <HomePage lists={data} />
    </>
  );
}
