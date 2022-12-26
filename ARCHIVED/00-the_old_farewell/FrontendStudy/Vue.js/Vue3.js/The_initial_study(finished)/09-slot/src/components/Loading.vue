<template>
  <div>
    Loading<br/>
    <button @click="eleBtn">获取父组件和根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'ZDH'
      }
    },
    methods: {
      say() {
        console.log('tinyRipple say');
      },
      eleBtn() {
        console.log(this.$parent);
        console.log(this.$root);
        console.log(this.$parent === this.$root);
      }
    },
  }
</script>

<style scoped>

</style>