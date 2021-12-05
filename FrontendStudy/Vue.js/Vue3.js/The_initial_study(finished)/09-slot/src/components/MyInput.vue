<template>
  <div>
    <!-- <button @click="btnClick">按钮</button> -->
    <!-- <input type="text" :value="modelValue" @input="inputChange"> -->
    <input type="text" v-model="tinyRipple1">
    <input type="text" v-model="tinyRipple2">
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String | Number,
      title: String
    },
    methods: {
      btnClick() {
        this.$emit('update:modelValue', 'test')
      },
      inputChange(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    },
    computed: {
      tinyRipple1: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      },
      tinyRipple2: {
        get() {
          return this.title
        },
        set(value) {
          this.$emit('update:title', value)
        }
      }
    },
    emit: ['update:modelValue', 'update:title']
  }
</script>

<style scoped>

</style>