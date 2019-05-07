const state = {
    current_channel: {
        id: 0,
        url: '',
        bandwidth: 0,
        output_list: []
    },
    channels_list: [],
    current_version: 1
}

const actions = {
    initChannels({commit}, data) {
        commit('INIT_CHANNELS', data);
    },
    addChannel({commit}, data) {
        commit('ADD_CHANNEL', data);
    },
    editChannel({commit}, data) {
        commit('EDIT_CHANNEL', data);
    },
    deleteChannel({commit}, data) {
        commit('DELETE_CHANNEL', data);
    },
    setCurrentChannel({commit}, data) {
        commit('SET_CURRENT_CHANNEL', data);
    },
    loadVersion({commit}, data) {
        commit('LOAD_VERSION', data);
    },
    search({commit}, data) {
        commit('SEARCH', data);
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
        let find_channel = state.channels_list.find( item => item.channel.id == data.id);
        if (find_channel) {
            find_channel.channel.url = data.url;
            find_channel.channel.bandwidth = data.bandwidth;
        }
    },
    'DELETE_CHANNEL'(state, data) {
        let channel = state.channels_list.find( item => item.channel.id == data.id);
        if (channel) {
            state.channels_list.splice(state.channels_list.indexOf(channel), 1);
        }
    },
    'SET_CURRENT_CHANNEL'(state, data) {
        state.current_channel = data;
    },
    'LOAD_VERSION'(state, data) {
        state.current_version = data;
    },
    'SEARCH'(state, data) {
        state.channels_list = state.channels_list.filter((item) => {
            let search_result = item.output_list.filter((output_item) => {
                return output_item.description.search(data) != -1;
            });

            return search_result.length > 0 ? item : null;
        });
    }
}

const getters = {
    getChannelsList: state => {
        return state.channels_list;
    },

    getCurrentChannel: state => {
        return state.current_channel;
    },

    getCurrentVersion: state => {
        return state.current_version;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
