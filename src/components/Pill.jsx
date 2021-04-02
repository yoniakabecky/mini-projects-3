import React from "react";
import styled from "styled-components";

const Root = styled.div`
  margin: 0 8px;
  border-radius: 12px;
  height: 24px;
  background-color: ${({ featured }) =>
    featured === "featured" ? "hsl(180, 14%, 20%)" : "hsl(180, 29%, 50%)"};

  @media (max-width: 640px) {
    margin: 0 4px;
  }
`;

const Text = styled.p`
  margin: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: hsl(180, 31%, 95%);
`;

export default function Pill({ type }) {
  return (
    <Root featured={type}>
      <Text>{type === "featured" ? "featured" : "new!"}</Text>
    </Root>
  );
}
