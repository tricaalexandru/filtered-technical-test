import sidebarReducer, { initialState } from '../reducers/sidebarReducer';
import * as actions from '../actions';

test('returns initial state', () => {
  expect(sidebarReducer(undefined, {})).toEqual(initialState);
});

test('handles MOVE_FROM_SIDEBAR', () => {
  const mockState = {
    assetList: [
      {
        id: 11,
        name: '10 Principles of Change Management',
        type: 'Article',
        duration: '0.11',
        durationType: 'min'
      },
      {
        id: 12,
        name: 'Overview of change management phases',
        type: 'Video',
        duration: '0.06',
        durationType: 'min'
      }
    ]
  };
  expect(sidebarReducer(mockState, actions.moveAssetFromSidebar(11))).toEqual({
    assetList: [
      {
        id: 12,
        name: 'Overview of change management phases',
        type: 'Video',
        duration: '0.06',
        durationType: 'min'
      }
    ]
  });
});
