/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Routes from './config/routes'
import store from './store'
import VueRouter from 'vue-router'
import Notification from './config/notification'

Vue.use(VueRouter);
Vue.use(Notification);



/**
 * vue router initialized
 */

const router = new VueRouter({
    routes: Routes,
    // mode: 'history'
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('main-layout', require('./layout/index.vue'));

const app = new Vue({
    el: '#app',
    store: store,
    router: router,
    computed: {
        loading() {
            return this.$store.state.loading;
        },
    },
});