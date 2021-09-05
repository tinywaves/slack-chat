import { createApp } from 'vue'
import App from './02_composition_api/App.vue'

const app = createApp(App)
// 全局 mixin
// app.mixin({
//   created() {
//     console.log('全局 mixin');
//   }
// })

app.mount('#app')
