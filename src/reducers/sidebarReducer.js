import assets from '../assets';

export const initialState = {
  assetList: assets
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_FROM_SIDEBAR':
      return Object.assign({}, state, {
        assetList: state.assetList.filter(asset => asset.id !== action.id)
      });
    default:
      return state;
  }
};

export default sidebarReducer;
