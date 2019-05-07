<template>
    <div class="modal modal-fill fade" data-backdrop="false" id="modal-channel-outputs" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content" style="max-width: 900px;">
                <div class="modal-header">
                    <h5 class="modal-title">Настройка выходов канала</h5>

                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- form start -->
                    <div class="box-body">
                        <div class="form-group" :class="">
                            <input type="text" v-model="$v.name.$model" class="form-control" placeholder="Название выхода">

                            <span class="help-block" v-show="$v.name.$error">Введите название выхода</span>
                        </div>

                        <div class="form-group" :class="">
                            <input type="text" v-model="$v.description.$model" class="form-control" placeholder="Описание выхода">

                            <span class="help-block" v-show="$v.description.$error">Введите описание выхода</span>
                        </div>

                        <div class="form-group" :class="">
                            <input type="text" v-model="$v.pnr.$model" class="form-control" placeholder="Pnr выхода">

                            <span class="help-block" v-show="$v.pnr.$error">Введите pnr выхода</span>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>

                <div class="modal-footer">
                    <button type="submit" class="btn btn-bold btn-pure btn-primary float-right" v-show="getCurrentChannel != null && !is_edit" @click.prevent="addChannelOutputs">Добавить выход</button>
                    <button type="submit" class="btn btn-bold btn-pure btn-primary float-right" v-show="is_edit" @click.prevent="editChannelOutput">Применить</button>
                </div>
            </div>

            <div class="modal-content" style="max-width: 900px;">
                <div class="modal-header">
                    <h5 class="modal-title">Список выходов канала</h5>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered dataTable no-footer table-striped" id="dataTable_crypto"
                           role="grid">
                        <thead>
                        <tr role="row" >
                            <th>#</th>
                            <th style="width: 60%;" class="text-left">Название</th>
                            <th class="left">Описание</th>
                            <th class="left">Pnr</th>
                            <th class="left">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(output, index) in getCurrentChannel.output_list">
                            <td>{{index + 1}}</td>
                            <td>{{ output.name }}</td>
                            <td>{{ output.description }}</td>
                            <td>{{ output.pnr }}</td>
                            <td>
                                <button @click="editOutput(output)"
                                        type="button"
                                        class="btn btn-sm btn-danger-outline">
                                    <i class="ti-notepad" aria-hidden="true"></i>
                                </button>
                                <button @click="removeChannelOutput(output)" type="button" class="btn btn-sm btn-danger-outline"
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
    </div>

</template>

<script>
    import {required} from 'vuelidate/lib/validators';
    import {db} from '../../libs/db';

    export default {
        data() {
            return {
                id: 0,
                name: '',
                description: '',
                pnr: 0,
                is_edit: false
            }
        },
        methods: {
            editOutput(output) {
                this.id = output.id;
                this.name = output.name;
                this.description = output.description;
                this.pnr = output.pnr;
                this.is_edit = true;
            },
            editChannelOutput() {
                this.$v.$touch();
                if (!this.$v.$invalid) {

                    db.post('channels/edit-channel-output', {
                        id: this.id,
                        channel_id: this.getCurrentChannel.channel.id,
                        name: this.name,
                        description: this.description,
                        pnr: this.pnr,
                    }, (result) => {
                        if (result.status == 200 && result.body != null) {
                            this.getCurrentChannel.output_list = result.body;
                        }

                        this.name = '';
                        this.description = '';
                        this.pnr = '';
                        this.is_edit = false;
                    });
                }
            },

            removeChannelOutput(output) {
                if (confirm('Удалить выход ?')) {
                    db.post('channels/delete-channel-output', {
                        channel_id: this.getCurrentChannel.channel.id,
                        id: output.id
                    }, (result) => {
                        if (result.status == 200) {
                            this.getCurrentChannel.output_list = result.body;
                        }
                    });
                }
            },
            addChannelOutputs() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    db.post('channels/add-channel-output', {
                        channel_id: this.getCurrentChannel.channel.id,
                        name: this.name,
                        description: this.description,
                        pnr: this.pnr,
                    }, (result) => {
                        if (result.status == 200) {
                            this.getCurrentChannel.output_list = result.body;

                            this.name = '';
                            this.description = '';
                            this.pnr = '';
                        }
                    });
                }
            }
        },
        computed: {
            getCurrentChannel() {
                return this.$store.getters.getCurrentChannel;
            }
        },
        validations: {
            name: {
                required
            },
            description: {
                required
            },
            pnr: {
                required
            }
        },

    }
</script>

<style scoped>

</style>
