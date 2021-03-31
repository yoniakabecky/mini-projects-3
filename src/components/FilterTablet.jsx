import React from "react";
import styled from "styled-components";
import removeIcon from "../images/icon-remove.svg";

const Root = styled.div`
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;
  height: 32px;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  background-color: hsl(180, 31%, 95%);
  border-radius: 5px 0 0 5px;
  padding: 9px 8px 7px;
  height: 100%;
  color: hsl(180, 29%, 50%);
  font-size: 13px;
  font-weight: 700;
`;

const Remove = styled.span`
  transition: background-color 0.5s ease;
  background-color: hsl(180, 29%, 50%);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  padding: 9px;
  width: 32px;
  height: 32px;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

export default function FilterTablet({ children, handleRemove }) {
  return (
    <Root>
      <Text>{children}</Text>

      <Remove onClick={() => handleRemove(children)}>
        <img src={removeIcon} alt="remove icon" />
      </Remove>
    </Root>
  );
}
