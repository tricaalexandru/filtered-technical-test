import React from 'react';
import styled from 'styled-components';
import Sidebar from './containers/Sidebar';
import Preview from './containers/Preview';
import Header from './containers/Header';

const Wrapper = styled.div`
  padding: 3.125em 0;
`;

const MainWrapper = styled.main`
  margin: 3.125em auto;
  max-width: 71.25em;
  padding: 0 1em;
`;

const AssetsView = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;
`;

const App = () => (
  <Wrapper>
    <Header />
    <MainWrapper>
      <AssetsView>
        <Sidebar />
        <Preview />
      </AssetsView>
    </MainWrapper>
  </Wrapper>
);

export default App;
