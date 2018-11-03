import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AssetList from './AssetList';

const Wrapper = styled.div`
  flex: 0 0 67%;
  max-width: 67%;
  min-height: 0.063em;
  padding: 0 1em;
`;

const Header = styled.h1`
  font-size: 1.5em;
  margin: 0 0 0.5em 0;
`;

const Preview = ({ assetList }) => (
  <Wrapper>
    <Header>Learning Assets Preview</Header>
    <AssetList assetList={assetList} />
  </Wrapper>
);

Preview.propTypes = {
  assetList: PropTypes.arrayOf(PropTypes.object)
};

export default Preview;
