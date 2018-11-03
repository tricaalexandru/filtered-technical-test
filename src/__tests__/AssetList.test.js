import React from 'react';
import { render } from 'react-testing-library';
import AssetList from '../components/AssetList';

test('renders', () => {
  const { container } = render(<AssetList />);
  expect(container.firstChild).toMatchSnapshot();
});
