<template>
    <div>
        <div class="m-4 p-4 border rounded space-x-2">
            <label>ชื่อฟอร์ม</label>
            <input
                class="border p-2"
                type="text"
                v-model="form.title"
            >
        </div>
        <div class="m-4 p-4 border rounded space-x-2">
            <label>ผู้เข้าร่วม</label>
            <textarea
                class="border p-2"
                v-model="form.invitees"
            />
        </div>

        <div
            v-for="(question, index) in form.questions"
            :key="index"
            class="m-4 p-4 border rounded space-y-2"
        >
            <div v-if="question.type === 'FormSelect'">
                <div class="m-4 p-4 border rounded space-x-2">
                    <label>คำถาม</label>
                    <input
                        class="border p-2"
                        type="text"
                        v-model="question.title"
                    >
                </div>
                <div class="m-4 p-4 border rounded space-x-2">
                    <label>ตัวเลือก</label>
                    <textarea
                        class="border p-2"
                        v-model="question.choices"
                    />
                </div>
            </div>
            <FormRadioGroupCardCreator
                v-model:title="question.title"
                v-model:choices="question.choices"
                v-if="question.type === 'FormRadioGroupCard'"
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

defineProps({
    routes: {type: Object, required: true},
});

const questionType = ref('dropdown');

const form = useForm({
    title: null,
    invitees: null,
    questions: [],
});

const newQuestion = () => {
    form.questions.push({
        title: null,
        type: questionType.value,
        choices: questionType.value === 'FormRadioGroupCard' ? [] : null,
    });
};

const questionTypes = [
    'FormSelect',
    'FormRadioGroupCard',
];
</script>

<style scoped>

</style>
