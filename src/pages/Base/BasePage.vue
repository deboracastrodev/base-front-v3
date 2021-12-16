<template>
    <div class="container-fluid">
      <div class="row nowrap">

        <main class="" style="flex: 1; overflow: hidden">
            <slot>
              <router-view />
            </slot>
        </main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from '@/pages/Base/Footer.vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'BasePage',
  components: { Footer },
  setup() {
    const store = useStore();
    const isOpened = ref(() => store.getters['utils/getIsOpened']);

    return {
      store,
      isOpened
    };
  }
});
</script>