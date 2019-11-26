import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7eeda65a = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _131f594a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _7eeda65a,
    name: "home"
  }, {
    path: "/",
    component: _131f594a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
