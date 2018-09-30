import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'

Vue.use(VueClipboard)

new Vue({
    el: '#root',
    render: h => h(App)
})
