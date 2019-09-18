import Vue from 'vue'
import Router from 'vue-router'
import Home from './screens/MovieList'
import Film from './screens/Film'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/film/:id',
      name: 'film',
      component: Film
    }
  ]
})
