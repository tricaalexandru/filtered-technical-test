import React from 'react';
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

const Header = () => (
  <Wrapper>
    <Summary>
      <Content>
        <Total>4 assets</Total>
        <Breakdown>
          2 x <span>Articles</span>, 1 x <span>Documents</span>, 1 x{' '}
          <span>Video</span>
        </Breakdown>
      </Content>
    </Summary>
  </Wrapper>
);

export default Header;
