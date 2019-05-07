<template>
    <!-- Content Wrapper. Contains page content -->
    <div>
        <version-info></version-info>

        <div class="row">
            <channel-form></channel-form>
            <edit-channel-form></edit-channel-form>
            <channel-outputs-form></channel-outputs-form>
        </div>

        <div class="row">
            <channels-list></channels-list>
        </div>


    </div>
</template>


<script>
    import VersionInfo from './version_info.vue';
    import ChannelForm from './channel_form.vue';
    import EditChannelForm from './edit_channel_form.vue';
    import ChannelOutputsForm from './channel_outputs_form.vue';
    import ChannelsList from './channels_list.vue';

    export default {
        components: {
            'channels-list': ChannelsList,
            'version-info': VersionInfo,
            'channel-form': ChannelForm,
            'edit-channel-form': EditChannelForm,
            'channel-outputs-form': ChannelOutputsForm
        }
    }
</script>
