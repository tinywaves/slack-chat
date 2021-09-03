<template>
  <div class="footer">
    <h2>Footer</h2>
    <h3>{{footers}}{{content}}</h3>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  // 数组用法
  // props: ['footers', 'content']
  props: {
    footers: String,
    content: {
      type: String,
      required: true,
      default: 'default'
    },
    info: {
      type: Object,
      default() {
        return {
          name: 'tinyRipple'
        }
      }
    }
  }
};
</script>

<style scoped></style>
