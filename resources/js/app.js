
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import jQuery from 'jquery';
window.$ = jQuery;

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './routes';
import store from './store'

const app = new Vue({
    el: '#app',
    router,
    store,
    template: '<router-view></router-view>'
});
