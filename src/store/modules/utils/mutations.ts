import * as types from './types';

export default {
  setIsOpened(state: types.IUtilsState, payload: boolean): void {
    state.isOpened = payload;
  }
};
