/* eslint-disable */
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

import helpers from '@/common/utils/helpers';
import filters from '@/common/filters';
import swalActions from '@/common/utils/swalActions';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $helpers: typeof helpers;
    $filters: typeof filters;
    $swalActions: typeof swalActions;
  }
}
