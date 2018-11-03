import React from 'react';
import { render } from 'react-testing-library';
import Sidebar from '../components/Sidebar';

test('renders', () => {
  const { container } = render(<Sidebar />);
  expect(container.firstChild).toMatchSnapshot();
});
