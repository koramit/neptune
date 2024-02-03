<template>
    <div>
        <FormInput
            label="ชื่อฟอร์ม"
            class="border p-2"
            v-model="form.title"
            name="title"
        />
        <FormTextarea
            label="ผู้เข้าร่วม"
            class="border p-2"
            v-model="form.invitees"
            mode="array"
        />
        <div
            v-for="(question, index) in form.questions"
            :key="index"
            class="m-4 p-4 border rounded space-y-2"
        >
            <FormSelectCreator
                v-model:title="question.title"
                v-model:choices="question.choices"
                v-if="question.type === 'FormSelect'"
            />

            <FormRadioGroupCardCreator
                v-model:title="question.title"
                v-model:choices="question.choices"
                v-if="question.type === 'FormRadioGroupCard'"
            />

            <FormAutocompleteCreator
                v-model:title="question.title"
                v-model:choices="question.choices"
                v-if="question.type === 'FormAutocomplete'"
            />

            <FormInputCreator
                v-model:title="question.title"
                v-if="question.type === 'FormInput'"
            />
        </div>
        <FormRadio
            name="type"
            v-model="questionType"
            :options="questionTypes"
        />
        <button @click="newQuestion">
            เพิ่มคำถาม
        </button>
        <br>

        <button
            class="mt-4"
            @click="form.post(routes.store)"
        >
            สร้าง
        </button>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/inertia-vue3';
import FormRadio from '../../Components/Controls/FormRadio.vue';
import FormRadioGroupCardCreator from '../../Components/Controls/FormRadioGroupCardCreator.vue';
import FormTextarea from '../../Components/Controls/FormTextarea.vue';
import FormSelectCreator from '../../Components/Controls/FormSelectCreator.vue';
import FormAutocompleteCreator from '../../Components/Controls/FormAutocompleteCreator.vue';
import FormInput from '../../Components/Controls/FormInput.vue';
import FormInputCreator from '../../Components/Controls/FormInputCreator.vue';

defineProps({
    routes: {type: Object, required: true},
});

const form = useForm({
    title: null,
    invitees: null,
    questions: [],
});

const newQuestion = () => {
    form.questions.push({
        title: null,
        type: questionType.value,
        choices:  [], // questionType.value === 'FormRadioGroupCard' ? [] : null,
    });
};

const questionType = ref(null);
const questionTypes = [
    'FormSelect',
    'FormRadioGroupCard',
    'FormAutocomplete',
    'FormInput',
];
</script>

<style scoped>

</style>
