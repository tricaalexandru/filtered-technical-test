const previewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MOVE_TO_PREVIEW':
      return Object.assign({}, state, {
        assetList: state.assetList
          ? [...state.assetList, action.asset]
          : [action.asset]
      });
    default:
      return state;
  }
};

export default previewReducer;
