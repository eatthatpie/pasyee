import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import HintAnimationModule from './modules/HintAnimation'

export default new Vuex.Store({
    modules: { 
        HintAnimationModule 
    }
})