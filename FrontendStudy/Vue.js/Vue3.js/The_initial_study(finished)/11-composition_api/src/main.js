import { createApp } from 'vue'
import App from './04_computed_watch/App.vue'

const app = createApp(App)
// 全局 mixin
// app.mixin({
//   created() {
//     console.log('全局 mixin');
//   }
// })

app.mount('#app')
