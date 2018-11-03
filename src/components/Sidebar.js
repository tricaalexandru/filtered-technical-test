import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AssetList from './AssetList';

const Wrapper = styled.div`
  background: #f8f8f8;
  flex: 0 0 33%;
  max-width: 33%;
  min-height: 0.063em;
  padding: 0 1em;
`;

const Sidebar = ({ assetList }) => (
  <Wrapper>
    <AssetList assetList={assetList} />
  </Wrapper>
);

Sidebar.propTypes = {
  assetList: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
