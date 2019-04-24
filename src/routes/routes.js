/**
 * Created by kostet on 05.02.2019.
 */
import Home from '../components/home.vue';

//import AppFavoriteCoins from '../components/coins/favorite_coins.vue';
//import AppBuyedCoins from '../components/coins/buyed_coins.vue';
//import AppWatchedCoins from '../components/coins/watched_coins.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/favorite/coins',
        //component: AppFavoriteCoins
    },
    {
        path: '/watch/coins',
        //component: AppWatchedCoins
    },
    {
        path: '/buy/coins',
        //component: AppBuyedCoins
    }
];
