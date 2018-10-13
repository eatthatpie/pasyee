import App from './App.vue'
import store from './store/store'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

new Vue({
    el: '#root',
    store,
    render: h => h(App)
})
