<template>
    <div class="mt-8">
        <div
            v-for="(form, key) in forms"
            :key="key"
            class="py-8 border-t-2 first:border-t-0 border-sky-600 border-dashed"
        >
            <div class="space-y-3">
                <p>
                    {{ form.title }}
                    <span
                        class="ml-3 italic"
                        v-if="form.responses"
                    >ตอบแล้ว <span class="font-medium">{{ form.responses }}</span> ท่าน</span>
                </p>
                <p class="text-sky-600">
                    <a
                        target="_blank"
                        :href="form.url"
                    >{{ form.url }}</a>
                </p>
                <img
                    class="h-24 w-24 rounded border border-sky-600"
                    :src="form.data"
                    alt="qrcode"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import QRCode from 'qrcode';

const props = defineProps({
    forms: {type: Array, required: true},
    invitations: {type: Array, required: true},
});

props.forms.forEach((form) => {
    QRCode.toDataURL(form.url, {
        errorCorrectionLevel: 'H',
        margin: 2,
        scale: 8,
        color: {
            dark: '#0285c7',
            light: '#f8fafc'
        }
    }).then((dataUrl) => {
        form.data = dataUrl;
    });
});
</script>
