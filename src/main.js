import App from './App.vue'
import store from './store/store'
import router from './router/router'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

new Vue({
    el: '#root',
    router,
    store,
    render: h => h(App)
})
