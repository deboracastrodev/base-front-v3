import * as types from './types';
import { ActionContext } from 'vuex';

export default {
  toogleIsOpenedMenu(context: ActionContext<types.IUtilsState, any>): void {
    context.commit('setIsOpened', !context.state.isOpened);
  }
};
