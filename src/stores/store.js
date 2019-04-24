/**
 * Created by kostet on 05.02.2019.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import coins from './modules/coins';
import sidebar_menu from './modules/sidebar_menu';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        coins,
        sidebar_menu
    }
})
