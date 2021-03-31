import React from "react";
import styled from "styled-components";
import FilterTablet from "./FilterTablet";

const Root = styled.div`
  display: flex;
  margin: 120px auto -37px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0 40px;
  width: 100%;
  min-height: 74px;

  @media (max-width: 640px) {
    padding: 0 24px;
  }
`;

const TabletWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  margin: 21px auto 0;
`;

const Clear = styled.span`
  align-self: center;
  transition: all 0.3s ease;
  outline: none;
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: hsl(180, 8%, 52%);
  font-size: 13px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
    color: hsl(180, 29%, 50%);
  }
`;

export default function SearchBar({ setKeywords, keywords }) {
  const handleRemove = (item) => {
    const filtered = keywords.filter((value) => value !== item);
    setKeywords([...filtered]);
  };

  return (
    <Root>
      <TabletWrapper>
        {keywords?.length > 0 &&
          keywords.map((keyword, i) => (
            <FilterTablet
              key={`search-keyword-${i}`}
              handleRemove={handleRemove}
            >
              {keyword}
            </FilterTablet>
          ))}
      </TabletWrapper>

      <Clear onClick={() => setKeywords([])}>Clear</Clear>
    </Root>
  );
}
