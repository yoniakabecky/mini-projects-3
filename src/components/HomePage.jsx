import React from "react";
import styled from "styled-components";

import bgDesktop from "../images/bg-header-desktop.svg";
import bgMobile from "../images/bg-header-mobile.svg";
import List from "./List";
import SearchBar from "./SearchBar";

const Root = styled.div`
  position: relative;
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

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  width: 100%;
  max-width: 1110px;

  @media (max-width: 1110px) {
    margin: 25px auto;
    width: 95%;
  }

  @media (max-width: 640px) {
    margin: 0 auto;
    max-width: 330px;
  }
`;

const ListsWrapper = styled.div`
  margin-top: ${({ keywords }) => (keywords ? 76 : 157 + 76)}px;

  @media (max-width: 640px) {
    margin-top: ${({ keywords }) => (keywords ? 76 : 157 + 76)}px;
  }
`;

export default function HomePage({ lists }) {
  const [keywords, setKeywords] = React.useState([]);

  return (
    <Root>
      <Header />

      <Container>
        {keywords.length > 0 && (
          <SearchBar keywords={keywords} setKeywords={setKeywords} />
        )}

        <ListsWrapper keywords={keywords.length > 0}>
          {lists.map((list) => (
            <List
              {...list}
              key={list.id}
              keywords={keywords}
              setKeywords={setKeywords}
            />
          ))}
        </ListsWrapper>
      </Container>
    </Root>
  );
}
