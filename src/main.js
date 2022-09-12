import { createApp } from 'vue'
import App from './App.vue'
import VueDragscroll from "vue-dragscroll"; 
import { createStore } from 'vuex';
import router from './router';
import storeConfig from './store/index';



const store = createStore(storeConfig)
createApp(App).use(VueDragscroll).use(store).use(router).mount('#app')
