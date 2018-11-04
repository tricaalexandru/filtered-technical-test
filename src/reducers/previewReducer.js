const previewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MOVE_TO_PREVIEW':
      return Object.assign({}, state, {
        assetList: state.assetList
          ? [...state.assetList, action.asset]
          : [action.asset]
      });
    case 'REMOVE':
      return Object.assign({}, state, {
        assetList:
          state.assetList &&
          state.assetList.length > 0 &&
          state.assetList.filter(asset => asset.id !== action.id)
      });
    default:
      return state;
  }
};

export default previewReducer;
