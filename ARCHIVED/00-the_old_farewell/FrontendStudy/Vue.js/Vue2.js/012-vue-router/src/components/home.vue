<template>
  <div>
    <h2>home</h2>
    <p>home---tinyRipple</p>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/messages">Messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      path: '/home/news'
    }
  },
  // activated 和 deactivated 只有在使用了 keep-alive 标签才有效
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
  created() {
    console.log('home created');
  },
  destroyed() {
    console.log('home destroyed');
  }
}
</script>

<style>

</style>
