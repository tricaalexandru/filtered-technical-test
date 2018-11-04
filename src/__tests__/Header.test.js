import React from 'react';
import { render } from 'react-testing-library';
import { renderWithRedux } from '../setupTests';
import Header from '../components/Header';
import ConnectedHeader from '../containers/Header';

test('renders', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with Redux', () => {
  const { queryByText } = renderWithRedux(<ConnectedHeader />);
  expect(queryByText('0 assets')).toBeInTheDocument();
  expect(queryByText('Article')).toBeNull();
  expect(queryByText('Document')).toBeNull();
  expect(queryByText('Online Course')).toBeNull();
  expect(queryByText('Video')).toBeNull();
  expect(queryByText('Articles')).toBeNull();
  expect(queryByText('Documents')).toBeNull();
  expect(queryByText('Online Courses')).toBeNull();
  expect(queryByText('Videos')).toBeNull();
});

test('renders the total number of assets in the preview pane', () => {
  const { getByText } = renderWithRedux(<ConnectedHeader />, {
    initialState: {
      previewReducer: {
        assetList: [
          {
            type: 'Article'
          }
        ]
      }
    }
  });
  expect(getByText('1 asset')).toBeInTheDocument();
});

test('renders the name of each type of asset in the preview pane', () => {
  let { getByText } = renderWithRedux(<ConnectedHeader />, {
    initialState: {
      previewReducer: {
        assetList: [
          {
            type: 'Article'
          },
          {
            type: 'Article'
          },
          {
            type: 'Document'
          }
        ]
      }
    }
  });
  expect(getByText('Articles')).toBeInTheDocument();
  expect(getByText('Document')).toBeInTheDocument();
});
