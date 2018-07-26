import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routeOptions = [
  {path: '/', component: 'Home'},
  {path: '/home', component: 'Home'},
  {path: '/dev', component: 'Dev'},
  {path: '/about', component: 'About'},
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  }
})

export default new Router({
  routes: routes,
  mode: 'history'
})
