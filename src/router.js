import { createRouter,createWebHistory } from "vue-router";
import HomeView from "./view/HomeView.vue";
import BookView from "./view/BookView.vue";
import BillView from "./view/BillView.vue";
import NotFound from "./view/404View.vue";
const routes = [
    {   path: '/', 
        component: HomeView, 
        name: 'HomeView',
        
    },
    {   path: '/book', 
        component: BookView, 
        name: 'BookView',
        
    },
    {   path: '/bill', 
        component: BillView, 
        name: 'BillView',
       
    },
    {   path: '/bill', 
        component: BillView, 
        name: 'BillView',
       
    },
    {  
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound        
    },
   
  ]

const router =createRouter({
    history: createWebHistory(),
    routes, 
})

export default router
