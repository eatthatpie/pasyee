import PageHome from './../pages/PageHome'
import PageCookiePolicy from './../pages/PageCookiePolicy'
import PageRoadmap from './../pages/PageRoadmap'
import PageSendFeedback from './../pages/PageSendFeedback'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/cookie-policy',
        component: PageCookiePolicy
    },
    {
        path: '/send-feedback',
        component: PageSendFeedback
    },
    {
        path: '/roadmap',
        component: PageRoadmap
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return { 
            x: 0, 
            y: 0 
        }
    }
})