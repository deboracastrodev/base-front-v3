<template>
  <div class="v-footer pl-md-5 pr-md-5">
    <div
      class="v-footer__copyright h6"
      :class="isOpened() ? 'v-footer__copyright--expanded' : null"
    >
      Vert Capital {{ new Date().getFullYear() }} © Todos os direitos reservados
    </div>
    <div>
      <a href="#" class="h6">Sobre a Vert</a> |
      <a href="#" class="h6">Fale conosco</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Footer',
  setup() {
    const store = useStore();
    const isOpened = ref(() => store.getters['utils/getIsOpened']);

    return {
      isOpened
    };
  }
});
</script>