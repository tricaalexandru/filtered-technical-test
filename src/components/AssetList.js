import React from 'react';
import styled from 'styled-components';
import Asset from './Asset';
import assets from '../assets';

const Wrapper = styled.ul`
  border-radius: 0.313em;
  height: 31.25em;
  list-style: none;
  margin: 0;
  overflow: scroll;
  padding: 1.25em;
`;

const AssetList = () => (
  <Wrapper>
    {assets.map(asset => (
      <Asset key={asset.id} asset={asset} />
    ))}
  </Wrapper>
);

export default AssetList;
