import React from 'react';
import { render } from 'react-testing-library';
import { renderWithRedux } from '../setupTests';
import Sidebar from '../components/Sidebar';
import ConnectedSidebar from '../containers/Sidebar';
import assets from '../assets';

test('renders', () => {
  const { container } = render(<Sidebar />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with Redux', () => {
  const { container } = renderWithRedux(<ConnectedSidebar />);
  const assetName = assets[0].name;
  expect(container.querySelector('h2')).toHaveTextContent(assetName);
});
