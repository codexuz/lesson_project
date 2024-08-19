import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { surveyPlugin } from 'survey-vue3-ui'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(surveyPlugin)
app.mount('#app')
