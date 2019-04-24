<template>
    <div class="wrapper">
        <!--<app-header></app-header>
        <app-left-side-bar></app-left-side-bar>-->

        <div class="content-wrapper">
            <!-- Main content -->
            <section class="content">
                <!--<app-coins-slider-ticker></app-coins-slider-ticker>-->
                <router-view></router-view>
            </section>
        </div>

        <!--<app-footer></app-footer>
        <app-right-sidebar></app-right-sidebar>-->
    </div>
</template>

<script>
/*    import AppHeader from './components/header.vue';

    import AppLeftSideBar from './components/sidebars/left_sidebar.vue';
    import AppRightSidebar from './components/sidebars/right_sidebar.vue';

    import AppFooter from './components/footer.vue'

    //import AppCoinsSliderTicker from './components/coins_slider_ticker.vue';*/

    export default {
        /*components: {
            'app-header': AppHeader,
            'app-left-side-bar': AppLeftSideBar,
            'app-right-sidebar': AppRightSidebar,
            'app-footer': AppFooter,
            'app-coins-slider-ticker': AppCoinsSliderTicker
        },*/
        created() {
            /*this.$store.dispatch('initCoins');

            this.$http.get(`buy_coins.json`)
                .then(response => response.json())
                .then(data => {
                    this.$store.dispatch('loadCoins', {
                        action: 'buy',
                        coins: data
                    });
                });

            this.$http.get(`favorite_coins.json`)
                .then(response => response.json())
                .then(data => {
                    this.$store.dispatch('loadCoins', {
                        action: 'favorite',
                        coins: data
                    });
                });

            this.$http.get(`watched_coins.json`)
                .then(response => response.json())
                .then(data => {
                    this.$store.dispatch('loadCoins', {
                        action: 'watched',
                        coins: data
                    });
                });*/
        }
    }
</script>

<style>

</style>
