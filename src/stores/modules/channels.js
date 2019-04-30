const state = {
    current_channel: null,
    channels_list: []
}

const actions = {
    initChannels({commit}, data) {
        commit('INIT_CHANNELS', data);
    },
    addChannel({commit}, data) {
        commit('ADD_CHANNEL', data);
    },
    editChannel({commit}, data) {

    },
    deleteChannel({commit}, data) {

    }
}

const mutations = {
    'INIT_CHANNELS' (state, data) {
        if (data.status == 200) {
            state.channels_list = data.body;
        }
    },
    'ADD_CHANNEL'(state, data) {
        state.current_channel.push({
            url: data.url,
            outputs: []
        });
    },
    'EDIT_CHANNEL'(state, data) {

    },
    'DELETE_CHANNEL'(state, data) {

    }
}

const getters = {
    getChannelsList: state => {
        return state.channels_list;
    },

    getCurrentChannel: state => {
        return state.current_channel;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
