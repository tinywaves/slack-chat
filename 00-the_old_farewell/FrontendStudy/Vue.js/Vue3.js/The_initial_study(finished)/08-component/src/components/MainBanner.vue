<template>
  <h2>Banner：{{test}}-{{name}}-{{arrayLength}}</h2>
</template>

<script>
export default {
  inject: ['test', 'name', 'arrayLength']
};
</script>

<style scoped></style>
