import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Asset from './Asset';

const Wrapper = styled.ul`
  border-radius: 0.313em;
  height: 31.25em;
  list-style: none;
  margin: 0;
  overflow: scroll;
  padding: 1.25em;
`;

const AssetList = ({ assetList }) => (
  <Wrapper>
    {assetList &&
      assetList.map(asset => <Asset key={asset.id} asset={asset} />)}
  </Wrapper>
);

AssetList.propTypes = {
  assetList: PropTypes.arrayOf(PropTypes.object)
};

export default AssetList;
