import Vue from 'vue';
import Vuex from 'vuex';

import channelsStore from './modules/channels';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        channelsStore
    }
})
