import React from 'react';
import { render } from 'react-testing-library';
import Header from '../components/Header';

test('renders', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});
