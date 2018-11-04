import React from 'react';
import { render } from 'react-testing-library';
import { renderWithRedux } from '../setupTests';
import Preview from '../components/Preview';
import ConnectedPreview from '../containers/Preview';

test('renders', () => {
  const { container } = render(<Preview />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with Redux', () => {
  const { queryByText } = renderWithRedux(<ConnectedPreview />);
  expect(queryByText('10 Principles of Change Management')).toBeNull();
});
