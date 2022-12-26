<template>
  <div>
    <h2>profile</h2>
    <p>profile---tinyRipple</p>
    <h2>{{$route.query}}</h2>
  </div>
</template>

<script>
export default {
  name: 'profile',
  created() {
    console.log('profile created');
  },
  destroyed() {
    console.log('profile destroyed');
  }
}
</script>

<style>

</style>
