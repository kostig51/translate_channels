import './assets/styles';

import Vue from "vue";
import App from "./App.vue";

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';

//import vSelect from 'vue-select';

import { routes } from './routes/routes';

import store from './stores/store';

import '../src/assets/vendor_components/jquery/dist/jquery.min.js';
import '../src/assets/vendor_components/popper/dist/popper.min.js';
import '../src/assets/vendor_components/bootstrap/dist/js/bootstrap.min.js';

import '../src/assets/vendor_components/jquery-slimscroll/jquery.slimscroll.js';
import '../src/assets/vendor_components/fastclick/lib/fastclick.js';

import '../src/assets/js/pages/dashboard.js';

//import '../src/assets/js/template.js';
//import '../src/assets/js/demo.js';

import { config } from './config/config';

//import './libs/filters';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate);

//Vue.component('v-select', vSelect);

const router = new VueRouter({
    'mode': 'history',
    routes
});

Vue.http.options.root = config.rest_server;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
