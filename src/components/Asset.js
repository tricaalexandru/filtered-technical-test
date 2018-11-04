import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: ${props => {
    if (props.type === 'Article') {
      return '#131540';
    }
    if (props.type === 'Document') {
      return '#6b5700';
    }
    if (props.type === 'Online Course') {
      return '#1e5c8f';
    }
    // props.type === "Video"
    return '#ab0d1a';
  }}
  color: #ffffff;
  cursor: ${props => (props.location === 'sidebar' ? 'pointer' : 'auto')};
  margin-bottom: 1.25em;
  padding: 0.625em;
  position: relative;
  transition: background ease 0.35s, transform cubic-bezier(0.47, 2.02, 0.31, -0.36) 0.35s;

  :hover:not(:disabled) {
    transform: scale(1.1);
  }
`;

const Name = styled.h2`
  font-size: 0.75em;
  margin: 0 0 0.5em 0;
`;

const Details = styled.p`
  margin: 0 1em 0 0;

  span {
    color: #d4d4d4;
    font-size: 0.625em;
    margin: 0.313em;
  }
`;

const Button = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border: transparent;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  height: 1.625em;
  line-height: 0px;
  padding: 0;
  position: absolute;
  top: 0.125em;
  right: 0.125em;
  width: 1.625em;
`;

const Asset = ({
  asset,
  assetLocation,
  moveAssetFromSidebar,
  moveAssetToPreview,
  removeAssetFromMenu
}) => {
  const moveAsset = (asset, location) => {
    if (location === 'sidebar') {
      moveAssetFromSidebar(asset.id);
      moveAssetToPreview(asset);
    }
  };

  const removeAsset = id => removeAssetFromMenu(id);

  return (
    <Wrapper
      location={assetLocation}
      onClick={() => moveAsset(asset, assetLocation)}
      type={asset.type}
    >
      <Name>{asset.name}</Name>
      <Details>
        <span>{`${asset.duration} ${asset.durationType}`}</span>
        <span>{asset.type}</span>
      </Details>
      {assetLocation === 'preview' && (
        <Button
          name="remove asset"
          onClick={() => removeAsset(asset.id)}
          type="button"
        >
          x
        </Button>
      )}
    </Wrapper>
  );
};

Asset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
    durationType: PropTypes.string
  }),
  assetLocation: PropTypes.string,
  moveAssetFromSidebar: PropTypes.func,
  moveAssetToPreview: PropTypes.func,
  removeAssetFromMenu: PropTypes.func
};

export default Asset;
