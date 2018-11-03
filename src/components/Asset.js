import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  align-content: space-around;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  padding: 0.75em;
  width: 20em;
`;

const Name = styled.h4`
  flex: 1 1 100%;
`;

const DetailsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 100%;

  > p {
    font-size: 0.8em
    margin: 0 1rem 0 0;
  }
`;

const Asset = () => (
  <Wrapper>
    <Name>Asset</Name>
    <DetailsWrapper>
      <p>4 minutes</p>
      <p>Video</p>
    </DetailsWrapper>
  </Wrapper>
);

export default Asset;
