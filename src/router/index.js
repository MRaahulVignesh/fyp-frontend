import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashBoard from '../views/AdminDashBoard.vue'
import TimeLine from '../views/Timeline.vue'
import UserDashBoard from '../views/UserDashBoard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'admin',
    component: AdminDashBoard
  },
  {
    path: '/timeline/:id',
    name: 'timeline',
    props: true,
    component: TimeLine
  },
  {
    path: '/user',
    name: 'user',
    component: UserDashBoard
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
