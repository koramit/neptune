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
            class="m-4 p-4 border rounded space-x-2"
        >
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
    </div>
</template>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';

const props = defineProps({
    routes: {type: Object, required: true},
    formData: {type: Object, required: true},
});

const form = useForm({...props.formData});

const newQuestion = () => {
    form.questions.push({
        title: null,
        choices: null,
    });
};
</script>

<style scoped>

</style>
