<template>
    <app-home-page></app-home-page>
</template>

<script>
    import AppHomePage from './home_page/index.vue';

    import {db} from '../libs/db';

    export default {
        components: {
            'app-home-page': AppHomePage,
        },
        mounted() {
            db.post('channels/channels-list', {}, (result) => {
                this.$store.dispatch('initChannels', result);
            });
        }
    }
</script>
