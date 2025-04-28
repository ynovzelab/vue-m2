import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TitlePage from './components/TitlePage/index.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.component('TitlePage', TitlePage);

app.use(createPinia())
app.use(router)

app.mount('#app')
