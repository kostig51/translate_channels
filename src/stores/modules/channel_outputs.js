const state = {
    channel_outputs_list: []
}

const actions = {
    initChannelOutputs({commit}, data) {
        commit('INIT_CHANNEL_OUTPUTS', data);
    }
}

const mutations = {
    'INIT_CHANNEL_OUTPUTS': (state, data) => {
        if (data.status == 200) {
            state.channel_outputs_list = data.body;
        }
    }
}

const getters = {
    getChannelOutputsList: state => {
        return state.channel_outputs_list;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
