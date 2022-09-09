<template>
  <div class="main">
    <main-banner/>
    <main-production/>
  </div>
</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProduction from './MainProduction.vue'

export default {
  components: {
    MainBanner,
    MainProduction
  }
};
</script>

<style scoped></style>
