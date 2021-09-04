<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
  }

  .left, .center, .right, .addition {
    height: 50px;
  }

  .left, .right {
    width: 80px;
    background-color: #f00;
  }

  .addition {
    width: 100px;
    background-color: #f85;
  }

  .center {
    flex: 1;
    background-color: #ff0;
  }
</style>