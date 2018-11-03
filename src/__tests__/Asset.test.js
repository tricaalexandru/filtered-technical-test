import React from 'react';
import { render } from 'react-testing-library';
import Asset from '../components/Asset';

test('renders', () => {
  const mockAsset = {
    id: 99,
    name: 'Mock Name',
    type: 'Mock Type',
    duration: '0.11',
    durationType: 'min'
  };
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
