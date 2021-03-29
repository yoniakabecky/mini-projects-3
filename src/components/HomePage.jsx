import React from "react";
import styled from "styled-components";

import bgDesktop from "../images/bg-header-desktop.svg";
import bgMobile from "../images/bg-header-mobile.svg";
import List from "./List";

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Header = styled.div`
  background-image: url(${bgDesktop});
  background-color: hsl(180, 29%, 50%);
  width: 100vw;
  height: 156px;

  @media (max-width: 640px) {
    background-image: url(${bgMobile});
  }
`;

const ListsWrapper = styled.div`
  margin-top: 76px;

  @media (max-width: 640px) {
    margin-top: 55px;
  }
`;

export default function HomePage({ lists }) {
  return (
    <Root>
      <Header />

      <ListsWrapper>
        {lists.map((list) => (
          <List {...list} key={list.id} />
        ))}
      </ListsWrapper>
    </Root>
  );
}
