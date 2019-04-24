import { Utils as utils } from '../../libs/utils';

const state = {
    coins_list: [],
    buy_coins: [],
    favorite_coins: [],
    watched_coins: []
}

const actions = {
    initCoins({commit}) {
        //if (!utils.getLSItem('coins')) {
            const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

            let tick_count = 0;

            //Open connection
            socket.onopen = () => {
                console.log('Connected to binance');
            }

            socket.onclose = () => {
                console.log('Closed connection');
            }

            let all = false;
            socket.onmessage = (event) => {
                if (!all) {
                    var coins_list = JSON.parse(event.data).filter(function (item) {
                        return item.s.indexOf('BTC') > -1;
                    });

                    //utils.setLSItem('coins', coins_list);
                    commit('INIT_COINS', coins_list);
                    //all = true;
                }
            }
        /*} else {
            commit('INIT_COINS', utils.getLSItem('coins'));
        }*/
    },
    addCoin({commit}, data) {
        commit('ADD_COIN', data);
    },
    editCoin({commit}, data) {
        commit('EDIT_COIN', data);
    },
    removeCoin({commit}, data) {
        commit('REMOVE_COIN', data);
    },
    loadCoins({commit}, data) {
        commit('LOAD_COINS', data);
    }
}

const mutations = {
    'INIT_COINS' (state, coins) {
        state.coins_list = state.coins_list || coins;

        coins.map(el => {
            let in_list = state.coins_list.find(element => element.id == el.s);
            if (!in_list) {
                state.coins_list.push({
                    id: el.s,
                    url: 'https://www.binance.com/en/trade/pro/' + el.s.substring(0, el.s.length - 3) + '_BTC',
                    percent: el.P,
                    volume: el.q,
                    price: el.a,
                });
            } else {
                in_list.percent = el.P;
                in_list.volume = el.q;
                in_list.price = el.a;
            }
        });
    },
    'ADD_COIN' (state, data) {
        state[`${data.action}_coins`] = state[`${data.action}_coins`] || [];

        if (state[`${data.action}_coins`].find(element => element.id == data.id)) {
            return false;
        }

        let coin_param = state.coins_list.find(element => element.id == data.id);
        if (coin_param) {
            state[`${data.action}_coins`].push({
                id: data.id,
                description: data.description,
                sell_description: data.sell_description != undefined ? data.sell_description : '',
                coin_type: data.action,
                params: coin_param
            });

            return true;
        }

        return false;
    },
    'EDIT_COIN' (state, data) {

    },
    'REMOVE_COIN' (state, data) {
        let coin = state[`${data.action}_coins`].find(element => element.id == data.coin.id);

        if (coin) {
            state[`${data.action}_coins`].splice(state[`${data.action}_coins`].indexOf(coin), 1);
        }
    },
    'LOAD_COINS' (state, data) {
        state[`${data.action}_coins`] = data.coins;
    }
}

const getters = {
    getWatchedCoins: state => {
        return state.watched_coins;
    },
    getFavoriteCoins: state => {
        return state.favorite_coins;
    },
    getBuyedCoins: state => {
        return state.buy_coins;
    },
    getMaxLooseCoins: state => {
        let coins_list = [];

        state.coins_list.map(coin => {
            if (coin.percent < -5) {
                coins_list.push(coin);
            }
        });

        return coins_list;
    },
    getMaxHaveCoins: state => {
        let coins_list = [];

        state.coins_list.map(coin => {
            if (coin.percent > 5) {
                coins_list.push(coin);
            }
        });

        return coins_list.slice(0, 10);
    },
    getCoinsList: state => {
        state.buy_coins = state.buy_coins != null ? state.buy_coins.map(item => {
            let update_coin = state.coins_list.find(element => element.id == item.id);
            if (update_coin) {
                item.url = update_coin.url;
                item.params.price = update_coin.price;
                item.params.volume = update_coin.volume;
                item.params.percent = update_coin.percent;
            }

            return item;
        }) : null;

        state.favorite_coins = state.favorite_coins != null ? state.favorite_coins.map(item => {
            let update_coin = state.coins_list.find(element => element.id == item.id);
            if (update_coin) {
                item.url = update_coin.url;
                item.params.price = update_coin.price;
                item.params.volume = update_coin.volume;
                item.params.percent = update_coin.percent;
            }

            return item;
        }) : null;

        state.watched_coins = state.watched_coins != null ? state.watched_coins.map(item => {
            let update_coin = state.coins_list.find(element => element.id == item.id);
            if (update_coin) {
                item.url = update_coin.url;
                item.params.price = update_coin.price;
                item.params.volume = update_coin.volume;
                item.params.percent = update_coin.percent;
            }

            return item;
        }) : null;

        return state.coins_list != null ? state.coins_list.map(item => {
            return {
                id: item.id,
                description: '',
                coin_type: 'all',
                url: item.url,
                params: item
            }
        }) : [];
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
