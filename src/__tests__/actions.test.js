import * as actions from '../actions';
import * as types from '../actions/types';

test('creates an action to remove an asset from the sidebar', () => {
  expect(actions.moveAssetFromSidebar(1)).toEqual({
    type: types.MOVE_FROM_SIDEBAR,
    id: 1
  });
});
