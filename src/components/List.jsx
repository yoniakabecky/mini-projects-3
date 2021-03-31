import React from "react";
import styled from "styled-components";
import Pill from "./Pill";

export default function List({ keywords, setKeywords, ...list }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = list;

  const tabletsList = [role, level, ...languages, ...tools];

  const display = () => {
    const skillSet = new Set(tabletsList);
    return keywords.every((keyword) => skillSet.has(keyword));
  };

  const addSearch = (item) => {
    if (!keywords.includes(item)) {
      setKeywords([...keywords, item]);
    }
  };

  return (
    display() && (
      <Root>
        {featured && (
          <Mask>
            <FeaturedLine />
          </Mask>
        )}

        <Card>
          <Logo src={`.${logo}`} alt={`${company} logo`} />

          <JobDetails>
            <Header>
              <CompanyName>{company}</CompanyName>

              {isNew && <Pill type="new" />}
              {featured && <Pill type="featured" />}
            </Header>

            <PositionName>{position}</PositionName>

            <AdditionalInfo>
              {postedAt}
              <GrayDot />
              {contract}
              <GrayDot />
              {location}
            </AdditionalInfo>
          </JobDetails>

          <Divider />

          <Tablets>
            {tabletsList.length > 0 &&
              tabletsList.map((item, i) => (
                <Tablet key={`item-${i}`} onClick={() => addSearch(item)}>
                  {item}
                </Tablet>
              ))}
          </Tablets>
        </Card>
      </Root>
    )
  );
}

const Root = styled.div`
  position: relative;
  margin: 25px auto;

  @media (max-width: 640px) {
    margin: 40px auto;
    height: 258px;
  }
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  width: 10px;
  height: 100%;
  overflow: hidden;
`;

const FeaturedLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: hsl(180, 29%, 50%);
  width: 5px;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 15px 20px rgba(93, 165, 164, 0.25);
  padding: 32px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 24px 12px;
  }
`;

const Logo = styled.img`
  margin: 0 8px;

  @media (max-width: 640px) {
    position: absolute;
    top: -24px;
    left: 24px;
    margin: 0 auto;
    width: 48px;
    height: 48px;
  }
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 16px;
  min-width: 300px;

  @media (max-width: 640px) {
    margin-left: 0;
    flex-grow: unset;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.p`
  margin-right: 8px;
  color: hsl(180, 29%, 50%);
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 640px) {
    margin-right: 12px;
    font-size: 13px;
  }
`;

const PositionName = styled.p`
  transition: color 0.3s ease;
  margin: 12px 0;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: hsl(180, 29%, 50%);
  }

  @media (max-width: 640px) {
    font-size: 15px;
    margin: 12px 0 16px;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  color: hsl(180, 8%, 52%);

  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

const GrayDot = styled.span`
  display: inline-block;
  margin: 0 16px;
  border-radius: 50%;
  background-color: hsl(180, 8%, 52%);
  width: 4px;
  height: 4px;

  @media (max-width: 640px) {
    margin: 0 8px;
  }
`;

const Tablets = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    margin-bottom: -16px;
  }
`;

const Tablet = styled.span`
  transition: all 0.5s ease;
  margin: 8px 8px;
  border-radius: 5px;
  background-color: hsl(180, 31%, 95%);
  cursor: pointer;
  height: 32px;
  padding: 10px 8px;
  color: hsl(180, 29%, 50%);
  font-size: 13px;
  font-weight: 700;

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 31%, 95%);
  }

  @media (max-width: 640px) {
    margin: 0 16px 16px 0;
  }
`;

const Divider = styled.hr`
  @media (max-width: 640px) {
    background-color: hsl(180, 8%, 52%);
    margin-top: 18px;
    margin-bottom: 16px;
    width: 100%;
    height: 1px;
  }
`;
