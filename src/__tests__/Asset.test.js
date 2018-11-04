import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Asset from '../components/Asset';

const mockAsset = {
  id: 99,
  name: 'Mock Name',
  type: 'Mock Type',
  duration: '0.11',
  durationType: 'min'
};

test('renders', () => {
  const { container } = render(<Asset asset={mockAsset} />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.querySelector('h2')).toHaveTextContent('Mock Name');
  expect(container.querySelector('p span:nth-child(1)')).toHaveTextContent(
    '0.11 min'
  );
  expect(container.querySelector('p span:nth-child(2)')).toHaveTextContent(
    'Mock Type'
  );
});

test('renders with a button when in the preview pane', () => {
  const { getByText } = render(
    <Asset asset={mockAsset} assetLocation="preview" />
  );
  const closeButton = getByText('x');
  expect(closeButton).toBeInTheDocument();
});

test('is no longer rendered if the button is clicked', () => {
  const { getByText, queryByText, rerender } = render(
    <Asset asset={mockAsset} assetLocation="preview" />
  );
  const closeButton = getByText('x');
  fireEvent.click(closeButton);
  rerender();
  expect(queryByText('Mock Name')).toBeNull();
});
