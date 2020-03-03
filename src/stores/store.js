import Vue from 'vue';
import Vuex from 'vuex';

import channelsStore from './modules/channels';
import channelOutputsStore from './modules/channel_outputs';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        channelsStore,
        channelOutputsStore
    }
})
