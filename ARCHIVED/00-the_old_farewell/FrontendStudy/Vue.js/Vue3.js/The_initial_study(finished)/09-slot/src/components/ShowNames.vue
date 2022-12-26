<template>
  <div>
    <template v-for="(item, index) in names">
      <slot :item="item" :index="index" name="zdh"></slot>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      names: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>