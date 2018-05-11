import Vue from 'vue'
import VueX from 'vuex'
import InitialState from './partials/InitialState'
import Getters from './partials/getters'
import Mutations from './partials/mutations'
import Actions from './partials/actions'

// modules
// import Blog from './modules/blog'

Vue.use(VueX);

const store = new VueX.Store({
    strict: false,

    modules: {
        // Blog,
    },

    state: InitialState,
    getters: Getters,
    mutations: Mutations,
    actions: Actions

});

export default store;