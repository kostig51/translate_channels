<template>
    <div class="col-xl-12 col-lg-12">
        <div class="box">
            <div class="box-header with-border">
                <h4 class="box-title">Список каналов</h4>
                <div class="box-controls pull-right">
                    <div class="box-header-actions">
                        <div class="lookup lookup-sm lookup-right d-none d-lg-block">
                            <input type="text" name="s" placeholder="Search">
                        </div>
                        <button class="btn btn-sm btn-success" data-toggle="modal" data-target="#modal-add-channel">Добавить канал</button>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered dataTable no-footer table-striped" id="dataTable_crypto"
                       role="grid">
                    <thead>
                    <tr role="row">
                        <th>#</th>
                        <th style="width: 60%;" class="text-left">Url</th>
                        <th class="left">Bandwidth</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="channel in getChannelsList">
                        <td>{{channel.id}}</td>
                        <td>{{channel.url}}</td>
                        <td>{{channel.bandwidth}}</td>
                        <td>
                            <button @click="editChannel(channel)" type="button" class="btn btn-sm btn-danger-outline"
                                    data-toggle="tooltip" data-original-title="Edit"><i class="ti-notepad"
                                                                                        aria-hidden="true"></i></button>
                            <button @click="removeChannel(channel)" type="button" class="btn btn-sm btn-danger-outline"
                                    data-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"
                                                                                          aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "channels_list",

        methods: {
            editChannel(channel) {

            },
            removeChannel(channel) {

            }
        },
        computed: {
            getChannelsList() {
                return this.$store.getters.getChannelsList;
            }
        }
    }
</script>

<style scoped>

</style>
