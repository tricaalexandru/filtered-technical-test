import React from 'react';
import styled from 'styled-components';
import AssetList from './AssetList';

const Wrapper = styled.div`
  flex: 0 0 67%;
  max-width: 67%;
  min-height: 0.063em;
  padding: 0 1em;
`;

const Preview = () => (
  <Wrapper>
    <AssetList />
  </Wrapper>
);

export default Preview;
