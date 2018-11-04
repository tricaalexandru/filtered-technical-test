import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.header`
  background: #f8f8f8;
  padding: 1.875em 0;
`;

const Summary = styled.div`
  max-width: 71.25em;
  padding: 0 1em;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;
`;

const Total = styled.div`
 flex: 0 0 50%;
 font-weight: bold;
 max-wdith: 50%
 padding: 0 1em;
`;

const Breakdown = styled.div`
  flex: 0 0 50%;
 max-wdith: 50%
 padding: 0 1em;
 text-align: right;

 span {
   font-size: 0.85em;
 }
`;

const Header = ({
  numberOfArticles,
  numberOfDocuments,
  numberOfOnlineCourses,
  numberOfVideos,
  totalNumberOfAssets
}) => (
  <Wrapper>
    <Summary>
      <Content>
        <Total>
          {totalNumberOfAssets === 1
            ? '1 asset'
            : `${totalNumberOfAssets} assets`}
        </Total>
        <Breakdown>
          {numberOfArticles > 0 && (
            <Fragment>
              {numberOfArticles} x{' '}
              <span>{numberOfArticles === 1 ? 'Article' : 'Articles'}</span>
              {(numberOfDocuments > 0 ||
                numberOfOnlineCourses > 0 ||
                numberOfVideos > 0) && <Fragment>{', '}</Fragment>}
            </Fragment>
          )}
          {numberOfDocuments > 0 && (
            <Fragment>
              {numberOfDocuments} x{' '}
              <span>{numberOfDocuments === 1 ? 'Document' : 'Documents'}</span>
              {(numberOfOnlineCourses > 0 || numberOfVideos > 0) && (
                <Fragment>{', '}</Fragment>
              )}
            </Fragment>
          )}
          {numberOfOnlineCourses > 0 && (
            <Fragment>
              {numberOfOnlineCourses} x{' '}
              <span>
                {numberOfOnlineCourses === 1
                  ? 'Online Course'
                  : 'Online Courses'}
              </span>
              {numberOfVideos > 0 && <Fragment>{', '}</Fragment>}
            </Fragment>
          )}
          {numberOfVideos > 0 && (
            <Fragment>
              {numberOfVideos} x{' '}
              <span>{numberOfVideos === 1 ? 'Video' : 'Videos'}</span>
            </Fragment>
          )}
        </Breakdown>
      </Content>
    </Summary>
  </Wrapper>
);

Header.propTypes = {
  numberOfArticles: PropTypes.number,
  numberOfDocuments: PropTypes.number,
  numberOfOnlineCourses: PropTypes.number,
  numberOfVideos: PropTypes.number,
  totalNumberOfAssets: PropTypes.number
};

export default Header;
