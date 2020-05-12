import Vue from 'vue'
import VueRouter from 'vue-router'
 import Home from '../views/Home.vue'
import Portfolio from '../views/portfolio/Portfolio.vue'
import Stocks from '../views/stocks/Stocks.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home, icon:'mdi-home' },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio, icon: "mdi-folder"  },
  { path: '/stocks', name: 'stocks', component: Stocks, icon: "mdi-chart-line" }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active" // active class for *exact* links.

})

export default router
