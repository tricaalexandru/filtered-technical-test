import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(reducers, initialState) } = {}
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store
});
