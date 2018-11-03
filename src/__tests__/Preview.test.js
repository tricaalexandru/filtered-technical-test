import React from 'react';
import { render } from 'react-testing-library';
import { renderWithRedux } from '../setupTests';
import Preview from '../components/Preview';
import ConnectedPreview from '../containers/Preview';
// import { initialState } from '../reducers/previewReducer'

test('renders', () => {
  const { container } = render(<Preview />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with Redux', () => {
  const { queryByText } = renderWithRedux(<ConnectedPreview />, {
    assetList: [
      {
        id: 11,
        name: '10 Principles of Change Management',
        type: 'Article',
        duration: '0.11',
        durationType: 'min'
      }
    ]
  });
  expect(queryByText('10 Principles of Change Management')).toBeNull();
});
