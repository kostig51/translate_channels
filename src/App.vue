<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <!-- Main content -->
            <section class="content">
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>

<script>
    import { db } from './libs/db';

    export default {
        created() {
            db.post('channels/version', {}, (result) => {
                if (result.status == 200) {
                    this.$store.dispatch('loadVersion', result.body);
                }
            });
        }
    }
</script>

<style>

</style>
