import React from 'react';
import styled from 'styled-components';
import AssetList from './AssetList';

const Wrapper = styled.div`
  background: #f8f8f8;
  flex: 0 0 33%;
  max-width: 33%;
  min-height: 0.063em;
  padding: 0 1em;
`;

const Sidebar = () => (
  <Wrapper>
    <AssetList />
  </Wrapper>
);

export default Sidebar;
