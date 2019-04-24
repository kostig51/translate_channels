/**
 * Created by kostet on 05.02.2019.
 */

const state = {
    selected_item: null,
    items: [
        {
            id: 'buy',
            link: '/buy/coins',
            title: 'Купить монету',
        },
        {
            id: 'watch',
            link: '/watch/coins',
            title: 'Наблюдаемые монеты',
        },
        {
            id: 'favorite',
            link: '/favorite/coins',
            title: 'Избранные монеты',
        }
    ]
}

const actions = {
    setSelectedMenuItem({commit}, item) {

    },

}

const mutations = {

}

const getters = {
    getSelectedMenuItem: state => {
        return state.selected_item;
    },
    getSidebarMenuItemsList: state => {
        return state.items;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
