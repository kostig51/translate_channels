import Vue from "vue";
import { config } from '../config/config';

export const db = {
    post: (action, params, fn) => {

        Vue.http.post(config.rest_server + action + '?key=' + config.app_key, params)
            .then((result) => {
                if (fn != undefined) {
                    fn(result);
                }
            });
    },
    get: (action, params, fn) => {
        this.$http.get(config.rest_server + '?key=' + config.app_key, params)
            .then((result) => {
                if (fn != undefined) {
                    fn(result);
                }
            });
    }
}
