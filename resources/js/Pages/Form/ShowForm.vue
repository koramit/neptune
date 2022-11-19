<template>
    <div class="p-4 sm:p-0">
        <div
            class="mt-6 sm:mt-10 lg:mt-14 space-x-4"
            v-for="(question, key) in questions"
            :key="key"
        >
            <FormSelect
                :label="question.title"
                :name="question.title"
                v-model="form[question.title]"
                :options="question.choices"
            />
        </div>
        <!--        <div>
            <label>หน่วยงานของผู้ตอบแบบสอบถาม : {{ division }}</label>
        </div>-->
        <FormCheckbox
            class="mt-8"
            label="ฉันรับทราบว่าฟอร์มนี้เป็นแบบไม่เปิดเผยตัวตนผู้ตอบ เมื่อทำการส่งคำตอบแล้วจะไม่สามารถแก้ไขหรือทำใหม่ได้อีก"
            v-model="form.confirmed"
            name="confirmed"
        />
        <button
            class="mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 disabled:bg-sky-600/40 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200"
            :disabled="invalidForm"
            @click="form.post(routes.store)"
        >
            ส่งคำตอบ
        </button>
    </div>
</template>

<script setup>

import {useForm} from '@inertiajs/inertia-vue3';
import FormSelect from '../../Components/Controls/FormSelect.vue';
import FormCheckbox from '../../Components/Controls/FormCheckbox.vue';
import {computed} from 'vue';

const props = defineProps({
    questions: {type: Array, required:true},
    division: {type: [String,null], required: true},
    routes: {type: Object, required: true},
});

let preForm = {
    division: props.division,
    confirmed: false,
};
props.questions.forEach(q => preForm[q.title] = null);
const form = useForm({...preForm});

const invalidForm = computed(() => {
    let qq = props.questions.map(q => q.title);
    qq.push('division');
    qq.push('confirmed');

    let invalid = false;
    for(let key in qq) {
        invalid = invalid || !form[qq[key]];
    }

    return invalid;
});
</script>

<style scoped>

</style>
