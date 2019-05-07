<template>
    <div class="modal modal-fill fade" data-backdrop="false" id="modal-edit-channel" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Редактирование канала</h5>

                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- form start -->
                    <div class="box-body">
                        <div class="form-group" :class="">
                            <input type="text" v-model="$v.url.$model" class="form-control" placeholder="Url">

                            <span class="help-block" v-show="$v.url.$error">Введите ссылку</span>
                        </div>

                        <div class="form-group" :class="">
                            <input type="text" v-model="bandwidth" class="form-control" placeholder="Bandwidth">

                            <input type="hidden" v-model="id" class="form-control" placeholder="Bandwidth">
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="submit" class="btn btn-bold btn-pure btn-primary float-right" v-show="getCurrentChannel != null" @click.prevent="editChannel">Принять
                    </button>
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
                url: '',
                bandwidth: 3000,
            }
        },
        methods: {
            editChannel() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    db.post('channels/edit-channel', {
                        id: this.id,
                        url: this.url,
                        bandwidth: this.bandwidth
                    }, (result) => {
                        if (result.status == 200) {
                            $("[data-dismiss='modal']").trigger('click');

                            this.$store.dispatch('editChannel', {
                                id: this.id,
                                url: this.url,
                                bandwidth: this.bandwidth
                            });
                        }
                    });
                }
            }
        },
        computed: {
            getCurrentChannel() {
                let channel = this.$store.getters.getCurrentChannel;
                if (channel) {
                    this.id = channel.id;
                    this.url = channel.url;
                    this.bandwidth = channel.bandwidth;
                }

                return channel;
            }
        },
        validations: {
            url: {
                required
            },
        },

    }
</script>

<style scoped>

</style>
