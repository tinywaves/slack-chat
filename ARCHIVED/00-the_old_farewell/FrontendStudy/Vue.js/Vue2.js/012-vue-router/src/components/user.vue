<template>
  <div>
    <h2>user</h2>
    <p>user---tinyRipple</p>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: 'user',
  created() {
    console.log('user created');
  },
  destroyed() {
    console.log('user destroyed');
  }
}
</script>

<style>

</style>
