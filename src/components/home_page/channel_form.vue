<template>
    <div class="modal modal-fill fade" data-backdrop="false" id="modal-channel" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Добавление нового канала</h5>

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
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="submit" class="btn btn-bold btn-pure btn-primary float-right" @click.prevent="addChannel">Добавить
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
                url: '',
                bandwidth: 3000,
            }
        },
        methods: {
            addChannel() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    db.post('channels/add-channel', {
                        url: this.url,
                        bandwidth: this.bandwidth,
                    }, (result) => {
                        this.$store.dispatch('initChannels', result);

                        $("[data-dismiss='modal']").trigger('click');
                    });
                }
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
