<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar.vue'
import TabBarItem from './components/TabBar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
