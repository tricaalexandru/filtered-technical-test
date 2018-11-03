import React from 'react';
import styled from 'styled-components';
import Asset from './Asset';

const Wrapper = styled.ul`
  display: flex
  flex-direction: column;
  list-style: none;
`;
const assets = [0, 1, 2, 3, 4, 5, 6, 7];

const AssetList = () => (
  <Wrapper>
    {assets.map(asset => (
      <Asset key={asset} />
    ))}
  </Wrapper>
);

export default AssetList;
