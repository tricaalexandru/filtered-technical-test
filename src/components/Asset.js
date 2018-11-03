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
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px;
`;

const Name = styled.h2`
  flex: 0 0 100%;
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

const Asset = ({ asset, moveAssetFromSidebar }) => {
  const onClick = id => moveAssetFromSidebar(id);
  return (
    <Wrapper onClick={() => onClick(asset.id)} type={asset.type}>
      <Name>{asset.name}</Name>
      <Details>
        <span>{`${asset.duration} ${asset.durationType}`}</span>
        <span>{asset.type}</span>
      </Details>
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
  moveAssetFromSidebar: PropTypes.func
};

export default Asset;
