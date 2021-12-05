import { createApp } from 'vue'
import App from './App.vue'

import('./utils/math').then(res => {
  console.log(res.sum(20, 30));
})

createApp(App).mount('#app')
