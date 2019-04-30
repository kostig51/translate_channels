<template>
    <!-- Content Wrapper. Contains page content -->
    <div>
        <version-info></version-info>

        <div class="row">
            <add-channel-form></add-channel-form>

            <add-channel-output-form></add-channel-output-form>
        </div>

        <div class="row">
            <channels-list></channels-list>
        </div>
    </div>
</template>


<script>
    import VersionInfo from './version_info.vue';
    import AddChannelForm from './add_channel_form.vue';
    import AddChannelOutputs from './add_channel_output_form.vue';
    import ChannelsList from './channels_list.vue';

    export default {
        components: {
            'channels-list': ChannelsList,
            'version-info': VersionInfo,
            'add-channel-form': AddChannelForm,
            'add-channel-output-form': AddChannelOutputs
        }
    }
</script>
