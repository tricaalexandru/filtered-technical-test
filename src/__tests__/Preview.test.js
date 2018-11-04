import React from 'react';
import { render } from 'react-testing-library';
import { renderWithRedux } from '../setupTests';
import Preview from '../components/Preview';
import ConnectedPreview from '../containers/Preview';

const mockAsset = {
  id: 99,
  name: 'Mock Name',
  type: 'Mock Type',
  duration: '0.11',
  durationType: 'min'
};

test('renders', () => {
  const { container } = render(<Preview />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with Redux', () => {
  const { queryByText } = renderWithRedux(<ConnectedPreview />);
  expect(queryByText('10 Principles of Change Management')).toBeNull();
});

test('renders when as asset has been moved from the sidebar', () => {
  const { container } = renderWithRedux(<ConnectedPreview />, {
    initialState: { previewReducer: { assetList: [mockAsset] } }
  });
  expect(container.querySelector('h2')).toHaveTextContent('Mock Name');
});
