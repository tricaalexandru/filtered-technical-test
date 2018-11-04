export const moveAssetFromSidebar = id => ({
  type: 'MOVE_FROM_SIDEBAR',
  id
});

export const moveAssetToPreview = asset => ({
  type: 'MOVE_TO_PREVIEW',
  asset
});
