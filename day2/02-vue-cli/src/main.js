import { createApp } from 'vue'
import App from './App.vue'
import CounterItem from './components/CounterItem.vue'


const app = createApp(App)
app.component('counter-item', CounterItem)
app.mount('#app')