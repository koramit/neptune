<template>
    <div>
        <FormInput
            label="คำถาม"
            v-model="question.title"
        />
        <FormTextarea
            label="ตัวเลือก"
            class="border p-2"
            v-model="question.choices"
            mode="array"
        />
    </div>
</template>

<script setup>

import FormInput from './FormInput.vue';
import FormTextarea from './FormTextarea.vue';
import {reactive, watch} from 'vue';

const props = defineProps({
    title: {type: [String, null], required: true},
    choices: {type: Array, required: true},
});

const emits = defineEmits(['update:title', 'update:choices']);

const question = reactive({
    title: props.title,
    choices: [...props.choices],
});

watch(
    () => question.title,
    (value) => emits('update:title', value),
);

watch(
    () => question.choices,
    (value) => emits('update:choices', value),
    {deep: true},
);
</script>

<style scoped>

</style>
