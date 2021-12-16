import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';


import UtilsStore from '@/store/modules/utils';

import { IUtilsState } from './modules/utils/types';


export interface IRootState {
  utils: IUtilsState;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

const store = createStore<IRootState>({
  modules: {
    utils: UtilsStore
  }
});

export default store;
