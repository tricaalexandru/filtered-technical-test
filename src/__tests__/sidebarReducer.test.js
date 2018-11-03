import sidebarReducer, { initialState } from '../reducers/sidebarReducer';

test('returns initial state', () => {
  expect(sidebarReducer(undefined, {})).toEqual(initialState);
});
