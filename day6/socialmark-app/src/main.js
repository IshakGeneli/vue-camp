import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import appHeader from './components/Shared/appHeader.vue'

import {appAxios} from './utils/appAxios'

const app = createApp(App)
app.use(router)
app.use(store)

app.config.globalProperties.$appAxios = appAxios 

app.component('app-header', appHeader)
app.mount('#app')