import Vue from "vue";
import App from "./App.vue";

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';

//import vSelect from 'vue-select';

import { routes } from './routes/routes';

//import store from './stores/store';

import '../src/assets/vendor_components/bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/amchats.css';
import '../src/assets/css/bootstrap-extend.css';
import '../src/assets/vendor_components/select2/dist/css/select2.min.css';
import '../src/assets/css/master_style.css';
import '../src/assets/css/skins/_all-skins.css';

import '../src/assets/vendor_components/jquery/dist/jquery.js';
import '../src/assets/vendor_components/popper/dist/popper.min.js';
import '../src/assets/vendor_components/jquery-slimscroll/jquery.slimscroll.js';
import '../src/assets/vendor_components/fastclick/lib/fastclick.js';
import '../src/assets/vendor_components/Web-Ticker-master/jquery.webticker.min.js';

import '../src/assets/js/pages/dashboard.js';

//import './libs/filters';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate);

//Vue.component('v-select', vSelect);

const router = new VueRouter({
    'mode': 'history',
    routes
});

//Vue.http.options.root = 'https://coins-9359d.firebaseio.com';

new Vue({
    el: '#app',
    router,
    //store,
    render: h => h(App)
});
