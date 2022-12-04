<template>
    <div>
        <FormInput
            name="title"
            label="ชื่อฟอร์ม"
            class="border p-2"
            v-model="form.title"
        />
        <FormTextarea
            label="ผู้เข้าร่วม"
            class="border p-2"
            v-model="form.invitees"
            mode="array"
        />

        <component
            v-for="(question, key) in form.questions"
            :key="key"
            :is="resolveCreatorComponent(`${question.type}Creator`)"
            v-model:title="question.title"
            v-model:choices="question.choices"
            v-model:foo="question.foo"
        />

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
            @click="form.patch(routes.update)"
        >
            บันทึก
        </button>

        <QRCode
            data="https://google.com"
        />
    </div>
</template>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';
import {useResolveCreatorComponent} from '../../functions/useResolveCreatorComponent.js';
import FormRadio from '../../Components/Controls/FormRadio.vue';
import FormTextarea from '../../Components/Controls/FormTextarea.vue';
import FormInput from '../../Components/Controls/FormInput.vue';
import {ref} from 'vue';
import QRCode from '../../Components/Helpers/QRCode.vue';

const props = defineProps({
    routes: {type: Object, required: true},
    formData: {type: Object, required: true},
});

const form = useForm(JSON.parse(JSON.stringify(props.formData)));

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
];

const {resolveCreatorComponent} = useResolveCreatorComponent();
</script>
