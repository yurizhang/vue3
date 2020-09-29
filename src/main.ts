import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import $trend from './plugs/handle'
import $eventBus from './plugs/enentBus'
import 'ant-design-vue/dist/antd.css';
const APP=createApp(App);
APP.use(Antd);
// dont write: const APP=createApp(App).use(store).use(router).mount('#app');
APP.config.globalProperties.$trend = $trend;
APP.config.globalProperties.$eventBus = $eventBus;
APP.config.globalProperties.$axios = axios;
APP.config.performance=true;


APP.use(store).use(router).mount('#app');
declare const window: Window & { APP: any}
window.APP=APP;
// window.APP=APP;
console.log(APP);
