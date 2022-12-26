<template>
  <div @click="divClick">
    Home组件{{name}}-{{age}}
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      name: {
        type: String,
        default: ''
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits: ['mycomponent'],
    methods: {
      divClick() {
        console.log('divClick');
        this.$emit('mycomponent', 'test')
      }
    }
  }
</script>

<style scoped>

</style>