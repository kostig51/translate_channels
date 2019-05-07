<template>
    <!-- Default box -->
    <div class="row">
        <div class="col-md-12 col-12">
            <div class="box box-solid bg-dark">
                <div class="box-header with-border">
                    <h3 class="box-title">Текущая версия файла</h3>
                </div>
                <div class="box-body">
                    <div v-show="is_generated" class="alert alert-success"> Файл успешно сгенерирован. </div>
                    <div v-show="is_generated" class="alert alert-info"> Ссылка на файл: <a :href="file_url" target="_blank">av_proxy.xml</a> </div>
                    {{ getCurrentVersion }}

                    <button class="btn btn-sm btn-success pull-right" @click="onGenerateNewFile">Генерация файла</button>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
    </div>
    <!-- /.box -->
</template>

<script>
    import { db } from '../../libs/db';

    export default {
        name: "version_info",

        data() {
            return {
                is_generated: false,
                file_url: ''
            }
        },

        methods: {
            onGenerateNewFile() {
                this.is_generated = false;
                db.post('channels/gen-new-file', {}, (result) => {
                    if (result.status == 200) {
                        this.$store.dispatch('loadVersion', result.body.current_version);

                        this.file_url = result.body.url;
                        this.is_generated = true;
                    }
                });
            }
        },

        computed: {
            getCurrentVersion() {
                return this.$store.getters.getCurrentVersion;
            }
        }
    }
</script>

<style scoped>

</style>
