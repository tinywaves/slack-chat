<template>
  {{content}}-{{title}}
</template>

<script>
import BasePage from './BasePage.vue'

export default {
  extends: BasePage,
  data() {
    return {
      content: 'Home'
    }
  }
}
</script>

<style scoped>

</style>