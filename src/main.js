import { createApp } from 'vue'
import App from './App.vue'
import VueDragscroll from "vue-dragscroll"; 
import { createStore } from 'vuex';
import router from './router';
import storeConfig from './store/index';

import directives from '../src/directives/index'

const store = createStore(storeConfig)
const app=createApp(App);
app.directive('hover',directives.hover)
app.use(VueDragscroll).use(store).use(router).mount('#app')
