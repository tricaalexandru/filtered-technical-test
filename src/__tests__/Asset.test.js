import React from 'react';
import { render } from 'react-testing-library';
import Asset from '../components/Asset';

test('renders', () => {
  const { container } = render(<Asset />);
  expect(container.firstChild).toMatchSnapshot();
});
