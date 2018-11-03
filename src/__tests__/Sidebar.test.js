import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { renderWithRedux } from '../setupTests';
import Sidebar from '../components/Sidebar';
import ConnectedSidebar from '../containers/Sidebar';
import assets from '../assets';
import { initialState } from '../reducers/sidebarReducer';

test('renders', () => {
  const { container } = render(<Sidebar />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with Redux', () => {
  const { container } = renderWithRedux(<ConnectedSidebar />, initialState);
  const assetName = assets[0].name;
  expect(container.querySelector('h2')).toHaveTextContent(assetName);
});

test('removes an asset from the list on that asset being clicked', () => {
  const { queryByText, rerender } = renderWithRedux(<ConnectedSidebar />);
  const assetName = assets[0].name;
  fireEvent.click(queryByText(assetName));
  rerender();
  expect(queryByText(assetName)).toBeNull();
});
