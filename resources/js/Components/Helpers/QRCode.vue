<template>
    <img
        class="h-24 w-24 rounded border border-sky-600"
        :src="dataUrl"
        alt="qrcode"
    >
</template>

<script setup>
import QRCode from 'qrcode';
import {ref, watch} from 'vue';

const props = defineProps({
    data: {type: String, required: true},
});

const dataUrl = ref(null);

watch(
    () => props.data,
    (value) => QRCode.toDataURL(value, {
        errorCorrectionLevel: 'H',
        margin: 2,
        scale: 8,
        color: {
            dark: '#0285c7',
            light: '#f8fafc'
        }
    }).then((qrcodeDataURL) => {
        dataUrl.value = qrcodeDataURL;
    }),
    {immediate: true}
);
</script>

<style scoped>

</style>
