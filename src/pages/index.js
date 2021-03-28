import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import favicon from "../images/favicon-32x32.png";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "spartan"
  }
`;

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
        <title>Job Listings | Frontend Mentor</title>
      </Helmet>

      <GlobalStyle />

      <p>Job listing</p>
    </>
  );
}
