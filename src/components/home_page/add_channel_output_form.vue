<template>
    <!-- Modal -->
    <div class="modal modal-fill fade" data-backdrop="false" id="modal-fill" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">Добавить выход для канала</h3>
                        </div>
                        <!-- /.box-header -->
                        <!-- form start -->
                        <form role="form" class="form-element">
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

                            <div class="box-footer">
                                <button type="submit" class="btn btn-danger" @click.prevent="addChannelOutput">Добавить</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-bold btn-pure btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-bold btn-pure btn-primary float-right">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { required } from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                name: '',
                description: '',
                pnr: 0,
                pushes: [],
            }
        },
        methods: {
            addChannelOutput() {
                this.$v.$touch();
                if (!this.$v.$invalid) {

                }
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
