import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px;
`;

const Name = styled.h2`
  flex: 0 0 100%;
  font-size: 12px;
  margin: 0 0 0.5em 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
`;

const Text = styled.p`
  margin: 0 1em 0 0;
`;

const Asset = ({ asset }) => (
  <Wrapper>
    <Name>{asset.name}</Name>
    <TextWrapper>
      <Text>{`${asset.duration} ${asset.durationType}`}</Text>
      <Text>{asset.type}</Text>
    </TextWrapper>
  </Wrapper>
);

Asset.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
    durationType: PropTypes.string
  })
};

export default Asset;
