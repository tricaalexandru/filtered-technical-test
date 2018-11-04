import * as actions from '../actions';
import * as types from '../actions/types';

test('creates an action to move an asset from the sidebar', () => {
  expect(actions.moveAssetFromSidebar(1)).toEqual({
    type: types.MOVE_FROM_SIDEBAR,
    id: 1
  });
});

test('creates an action to move an asset to the preview pane', () => {
  const mockAsset = {
    id: 11,
    name: '10 Principles of Change Management',
    type: 'Article',
    duration: '0.11',
    durationType: 'min'
  };
  expect(actions.moveAssetToPreview(mockAsset)).toEqual({
    type: types.MOVE_TO_PREVIEW,
    asset: mockAsset
  });
});

test('creates an action to remove an asset', () => {
  expect(actions.removeAssetFromMenu(1)).toEqual({
    type: types.REMOVE,
    id: 1
  });
});
