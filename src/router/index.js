import { createWebHistory, createRouter } from 'vue-router'
import Signin from '../components/Signin.vue'
import password from '../components/password.vue'
import createacc from '../components/createacc.vue'
import forgotpassword from '../components/forgotpassword.vue'
import mainPage from '../components/mainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
    path: '/',
    name:'Signin',
    component:Signin
    },
    {
      path:'/password',
      name:'password',
      component:password
    },
    {
      path:'/createacc',
      name:'createacc',
      component:createacc
    },
    {
      path:'/forgotpassword',
      name:'forgotpassword',
      component:forgotpassword
    },
    {
      path:'/mainPage',
      name:'mainPage',
      component:mainPage
    },
  ]

})
export default router;