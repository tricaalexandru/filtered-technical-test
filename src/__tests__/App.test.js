import React from 'react';
import { renderWithRedux } from '../setupTests';
import App from '../App';

test('renders', () => {
  const { container } = renderWithRedux(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
