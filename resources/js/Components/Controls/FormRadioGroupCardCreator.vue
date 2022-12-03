<template>
    <div>
        <FormInput
            label="คำถาม"
            v-model="question.title"
        />
        <button
            class="mt-4"
            @click="addChoice"
        >
            เพิ่มตัวเลือก
        </button>
        <div>
            <div
                class="m-4 p-4 border rounded space-y-2"
                v-for="(choice, key) in question.choices"
                :key="key"
            >
                <FormInput
                    label="title"
                    v-model="choice.title"
                />
                <FormInput
                    label="description"
                    v-model="choice.description"
                />
                <FormInput
                    label="image"
                    v-model="choice.image"
                />
                <FormInput
                    label="value"
                    v-model="choice.value"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {reactive, watch} from 'vue';
import FormInput from './FormInput.vue';

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

const addChoice = () => {
    question.choices.push({
        title: null,
        description: null,
        image: null,
        value: null,
    });
};
</script>
