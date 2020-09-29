1. 目前能和vue3配合的UI只有ant-design-vue2

2.vue3移除了event bus,使用mitt来替代

3.有了Composition API基本上不需要使用vuex了，但是某种情况 下vuex还是比较好用的。vue3的provide和inject数据回溯不容易去debug.

4. see detail: https://www.cnblogs.com/yuri2016/p/13750682.html

使用vue-cli4.5以下，生成一个javascript项目：

然后安装axios,and-design-vue2, mitt等,package.json如下：

复制代码
{
  "name": "vue4",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "ant-design-vue": "^2.0.0-beta.10",
    "axios": "^0.20.0",
    "core-js": "^3.6.5",
    "mitt": "^2.1.0",
    "vue": "^3.0.0-0",
    "vue-router": "^4.0.0-0",
    "vuex": "^4.0.0-0"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.33.0",
    "@typescript-eslint/parser": "^2.33.0",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-typescript": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0-0",
    "@vue/eslint-config-typescript": "^5.0.2",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0-0",
    "less": "^3.0.4",
    "less-loader": "^5.0.0",
    "typescript": "~3.9.3"
  }
}
复制代码
 

注意main.ts

复制代码
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
复制代码
eventbus.js封装如下：

复制代码
import mitt from 'mitt'

const bus = {};
const emitter = mitt();
bus.$on = emitter.on;
bus.$off = emitter.off;
bus.$emit = emitter.emit;
export default bus;
复制代码