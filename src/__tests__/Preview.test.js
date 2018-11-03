import React from 'react';
import { render } from 'react-testing-library';
import Preview from '../components/Preview';

test('renders', () => {
  const { container } = render(<Preview />);
  expect(container.firstChild).toMatchSnapshot();
});
