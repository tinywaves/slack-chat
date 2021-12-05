<template>
  <div @click="change" ref="div">
    {{message}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello'
      }
    },
    methods: {
      change() {
        this.message = 'tinyRipple'
      }
    },
    beforeCreate() {
      console.log('LifeCycle beforeCreate');
    },
    created() {
      console.log('LifeCycle created');
    },
    beforeMount() {
      console.log('LifeCycle beforeMount');
    },
    mounted() {
      console.log('LifeCycle mounted');
    },
    beforeUnmount() {
      console.log('LifeCycle beforeUnmount');
    },
    unmounted() {
      console.log('LifeCycle unmounted');
    },
    beforeUpdate() {
      console.log(this.$refs.div.innerHTML);
      console.log('LifeCycle beforeUpdate');
    },
    updated() {
      console.log(this.$refs.div.innerHTML);
      console.log('LifeCycle updated');
    }
  }
</script>

<style scoped>

</style>