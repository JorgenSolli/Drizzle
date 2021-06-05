import VueRouter from 'vue-router'

let routes = [
    { path: '/', name: 'map', component: require('@/pages/Map.vue').default },
    { path: '/about', name: 'about', component: require('@/pages/About.vue').default },
    { path: '*', redirect: '/404' },
]

const router = new VueRouter({
    linkActiveClass: 'menu-active',
    mode: 'history',
    routes
})

export default router
