import App from './App.vue'
import ServiceWorker from './ServiceWorkerRegister.js'
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

ServiceWorker.register()
.then(reg => {
    console.log('[sw] Service worker registration succeed.', reg)
})
.catch(error => {
    console.warn('[sw] Service worker registration failed with message: ' + error)
})