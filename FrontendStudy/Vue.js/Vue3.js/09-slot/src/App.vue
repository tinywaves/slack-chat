<template>
  <div>
    <!-- 插入 HTML 元素 -->
    <my-slot-cpn>
      <button>按钮</button>
      <button>按钮</button>
    </my-slot-cpn>
    <h2>**********</h2>
    <!-- 插入组件 -->
    <my-slot-cpn>
      <my-button/>
    </my-slot-cpn>
    <h2>**********</h2>
    <my-slot-cpn/>
    <nav-bar :name="slot">
      <template v-slot:left>
        <button>left</button>
      </template>
      <template v-slot:center>
        <button>center</button>
      </template>
      <template #right>
        <button>right</button>
      </template>
      <template #[slot]>
        <button>{{slot}}</button>
      </template>
    </nav-bar>
    <h2>**********</h2>
    <show-names :names="names">
      <template v-slot:zdh="slotProps">
        <button>{{slotProps.item}}-{{slotProps.index}}</button>
      </template>
    </show-names>
    <h2>**********</h2>
    <div>
      <button 
      v-for="item in tabs" 
      :key="item" 
      @click="changeBtn(item)" 
      :class="{active: currentItem === item}">
        {{item}}
      </button>
    </div>
    <!-- 使用动态组件 -->
    <keep-alive include="About">
      <component :is="currentItem" name="tinyRipple" :age="18" @click="mycomponent"></component>
    </keep-alive>
    <!-- 使用 v-if -->
    <!-- <template v-if="currentItem === 'Home'">
      <Home/>
    </template>
    <template v-else-if="currentItem === 'About'">
      <About/>
    </template>
    <template v-else>
      <Category/>
    </template> -->
  </div>
</template>

<script>
  import MySlotCpn from './components/MySlotCpn.vue'
  import MyButton from './components/MyButton.vue'
  import NavBar from './components/NavBar.vue'
  import ShowNames from './components/ShowNames.vue'
  import Home from './components/pages/Home.vue'
  import About from './components/pages/About.vue'
  import Category from './components/pages/Category.vue'

  export default {
    components: {
      MySlotCpn,
      MyButton,
      NavBar,
      ShowNames,
      Home,
      About,
      Category
    },
    data() {
      return {
        slot: 'ZDH',
        names: ['aaa', 'bbb', 'ccc'],
        tabs: ['Home', 'About', 'Category'],
        currentItem: 'Home'
      }
    },
    methods: {
      changeBtn(item) {
        this.currentItem = item
      },
      mycomponent(name) {
        console.log(name);
      }
    }
  }
</script>

<style scoped>
  .active {
    color: #f00;
  }
</style>