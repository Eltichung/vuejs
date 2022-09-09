import { createApp } from 'vue'
import App from './App.vue'
import VueDragscroll from "vue-dragscroll"; 
import { createStore } from 'vuex';
import router from './router';
import storeConfig from './store/index';


// Create a new store instance.
// const store = createStore({
//   state () {
//     return {
//       cart: [],
//       discount:0,
//       showDialog:false,
//       position: [1, 4, 5, 8, 3,2]
//     }
//   },
//   getters: {
//     getCart:cart=>cart.cart,
//     totalCart:data=>data.cart.reduce((total,item)=>total+=item.count*item.price,0),
//     getDiscount:cart=>cart.discount,
//     showDialog:item=>item.showDialog,
//     getPosition:item=>item.position
//   },
//   mutations: {
//     addCart (state,item) {
//       if(state.cart.includes(item)){
//         item.count++;
//       }
//       else{
//         item.count=1;
//         state.cart.push(item)
//       }
//     },
//     increaseCart (state,item) {
//       item.count++
//     },
//     minusCart (state,item) {
//       item.count--
//       if(item.count<1)
//         item.count=1
//     },
//     deleteItem (state,index) {
//       state.cart.splice(index,1)  
//     },
//     clearCart(state)
//     {
//       state.cart=[];
//     },
//     showForm(state)
//     {
//       state.showDialog=!state.showDialog;
//     }
//   }
// })
const store = createStore(storeConfig)
createApp(App).use(VueDragscroll).use(store).use(router).mount('#app')
