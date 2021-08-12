<template>
  <div id="app">
    <router-link to="/home" tag="button">home</router-link>
    <router-link to="/about" tag="button">about</router-link>
    <router-link :to="'/user/' + userId" tag="button">user</router-link>
    <!-- 参数传递需要绑定一个对象 -->
    <router-link :to="{
      path: '/profile',
      query: {
        name: 'tinyRipple',
        age: 20
      }
    }" tag="button">profile</router-link>
    <!-- <button @click="userClick">user</button>
    <button @click="profileClick">profile</button> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!-- exclude="" 取消缓存 -->
    <keep-alive exclude="profile,user">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "tinyRipple",
    };
  },
  methods: {
    // 通过 JavaScript 修改路由
    homeClick() {
      // this.$router.push('/home');
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push('/about');
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "tinyRipple",
          age: 20,
        },
      });
    },
  },
};
</script>

<style>
.active {
  color: #f00;
}
</style>
