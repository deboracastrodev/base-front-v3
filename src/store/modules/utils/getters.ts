import * as types from './types';

export default {
  getIsOpened(state: types.IUtilsState): boolean {
    return state.isOpened;
  }
};
