import previewReducer from '../reducers/previewReducer';
import { moveAssetToPreview, removeAssetFromMenu } from '../actions';

const mockAsset = {
  id: 11,
  name: '10 Principles of Change Management',
  type: 'Article',
  duration: '0.11',
  durationType: 'min'
};

test('returns initial state', () => {
  expect(previewReducer(undefined, {})).toEqual({});
});

test('handles MOVE_TO_PREVIEW', () => {
  const mockAsset = {
    id: 11,
    name: '10 Principles of Change Management',
    type: 'Article',
    duration: '0.11',
    durationType: 'min'
  };
  expect(previewReducer({}, moveAssetToPreview(mockAsset))).toEqual({
    assetList: [mockAsset]
  });
});

test('handles REMOVE', () => {
  expect(
    previewReducer({ assetList: [mockAsset] }, removeAssetFromMenu(11))
  ).toEqual({ assetList: [] });
});
