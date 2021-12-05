<template>
  <div>
    <home message="tinyRipple" id="ZDH" class="myClass" />
    <read-only/>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import ReadOnly from './ReadOnly.vue'

  export default {
    setup() {
      
    },
    components: {
      Home,
      ReadOnly
    }
  }
</script>

<style scoped>

</style>