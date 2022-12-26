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
    <h2>**********</h2>
    <async-category></async-category>
    <h2>**********</h2>
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
    <h2>**********</h2>
    <h2 ref="element">Element</h2>
    <loading ref="loading" />
    <button @click="eleClick">获取元素</button>
    <h2>**********</h2>
    <button @click="changeShow">销毁 life-cycle</button>
    <template v-if="isShow">
      <life-cycle></life-cycle>
    </template>
    <h2>**********</h2>
    <my-input v-model="message" />
    <!-- 绑定两个 v-model -->
    <my-input v-model="message" v-model:title="title" />
    <!-- <my-input :modelValue="message" @update:model="message = $event" /> -->
    {{message}}
    {{title}}
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'

  import MySlotCpn from './components/MySlotCpn.vue'
  import MyButton from './components/MyButton.vue'
  import NavBar from './components/NavBar.vue'
  import ShowNames from './components/ShowNames.vue'
  import Home from './components/pages/Home.vue'
  import About from './components/pages/About.vue'
  import Loading from './components/Loading.vue'
  import Error from './components/Error.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import MyInput from './components/MyInput.vue'
  // import AsyncCategory from './components/pages/AsyncCategory.vue'
  // const AsyncCategory = defineAsyncComponent(() => import('./components/pages/AsyncCategory.vue'))
    const AsyncCategory = defineAsyncComponent({
      loader: () => import('./components/pages/AsyncCategory.vue'),
      loadingComponent: Loading,
      errorComponent: Error,
      delay: 200,
      /**
       * error: 错误信息
       * retry: 函数，重新加载
       * attempts: 记录尝试次数
       */
      onError: function(error, retry, fail, attemps) {
        console.log(error);
      }
    })

  export default {
    components: {
      MySlotCpn,
      MyButton,
      NavBar,
      ShowNames,
      Home,
      About,
      AsyncCategory,
      Loading,
      LifeCycle,
      MyInput
    },
    data() {
      return {
        slot: 'ZDH',
        names: ['aaa', 'bbb', 'ccc'],
        tabs: ['Home', 'About', 'AsyncCategory'],
        currentItem: 'Home',
        isShow: true,
        message: 'Hello Vue3.js',
        title: 'ZDH'
      }
    },
    methods: {
      changeBtn(item) {
        this.currentItem = item
      },
      mycomponent(name) {
        console.log(name);
      },
      eleClick() {
        console.log(this.$refs.element);
        console.log(this.$refs.loading);
        console.log(this.$refs.loading.message);
        this.$refs.loading.say()
        console.log(this.$refs.loading.$el);
      },
      changeShow() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .active {
    color: #f00;
  }
</style>