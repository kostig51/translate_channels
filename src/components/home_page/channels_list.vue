<template>
    <div class="col-xl-12 col-lg-12">
        <div class="box">
            <div class="box-header with-border">
                <h4 class="box-title">Список каналов</h4>
                <div class="box-controls pull-right">
                    <div class="box-header-actions">
                        <div class="lookup lookup-sm lookup-right d-none d-lg-block">
                            <input type="text" v-model="search_by" @input="onSearchByChannelOutputs" placeholder="Поиск">
                        </div>
                        <button class="btn btn-sm btn-success" data-toggle="modal" data-target="#modal-channel">Добавить канал</button>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered dataTable no-footer table-striped" id="dataTable_crypto"
                       role="grid">
                    <thead>
                    <tr role="row">
                        <th>#</th>
                        <th class="text-left">Список выходов</th>
                        <th style="width: 30%;" class="text-left">Url</th>
                        <th class="left">Bandwidth</th>
                        <th class="left">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(channel_item, index) in getChannelsList">
                        <td>{{ index + 1}}</td>
                        <td>
                            <p v-for="output in channel_item.output_list">
                                {{output.description}} [{{output.name}}]
                            </p>
                        </td>
                        <td>
                            <div class="pull-left" style="font-size: 14px;">
                                {{channel_item.channel.url}}
                                <br/>
                                <span class="label label-success font-size-10">Всего выходов: {{channel_item.output_list.length}}</span>
                            </div>

                            <div class="pull-right">
                                <button @click="addChannelOutputs(channel_item)" type="button"
                                        class="btn btn-sm btn-danger-outline"
                                        data-toggle="modal" data-target="#modal-channel-outputs"
                                        >
                                    <i class="ti-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </td>
                        <td>{{channel_item.channel.bandwidth}}</td>
                        <td>
                            <button @click="editChannel(channel_item.channel)"
                                    type="button"
                                    class="btn btn-sm btn-danger-outline"
                                    data-toggle="modal" data-target="#modal-edit-channel">
                                <i class="ti-notepad" aria-hidden="true"></i>
                            </button>
                            <button @click="removeChannel(channel_item.channel)" type="button" class="btn btn-sm btn-danger-outline"
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
    import { db } from '../../libs/db';

    export default {
        name: "channels_list",

        data() {
            return {
                search_by: '',
                channels_list: []
            }
        },

        methods: {
            editChannel(channel) {
                this.$store.dispatch('setCurrentChannel', channel);
            },
            removeChannel(channel) {
                if (confirm('Удалить канал ? ')) {
                    db.post('channels/delete-channel', {
                        id: channel.id
                    }, (result) => {
                        if (result.status == 200) {
                            this.$store.dispatch('deleteChannel', channel);
                        }
                    });
                }
            },
            onSearchByChannelOutputs() {
                if(this.search_by.length > 2) {
                    this.$store.dispatch('search', this.search_by);
                }
            },
            addChannelOutputs(channel) {
                this.$store.dispatch('setCurrentChannel', channel);
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
