<script setup>

import FormInput from './FormInput.vue';
import {reactive, watch} from 'vue';

const props = defineProps({
    title: {type: [String, null], required: true},
});

const emits = defineEmits(['update:title']);

const question = reactive({
    title: props.title,
});

watch(
    () => question.title,
    (value) => emits('update:title', value),
);
</script>

<template>
    <div>
        <FormInput
            label="คำถาม"
            v-model="question.title"
            name="title"
        />
    </div>
</template>

<style scoped>

</style>
