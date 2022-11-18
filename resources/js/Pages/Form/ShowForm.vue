<template>
    <h1>{{ title }}</h1>
    <div
        v-for="(question, key) in questions"
        :key="key"
    >
        <label>{{ question.title }} :</label>
        <FormSelect
            :name="question.title"
            v-model="form[question.title]"
            :options="question.choices"
        />
    </div>
    <div>
        <label>หน่วยงานของผู้ตอบแบบสอบถาม : {{ division }}</label>
    </div>
    <FormCheckbox
        label="ฉันรับทราบว่าฟอร์มนี้เป็นแบบไม่เปิดเผยตัวตนผู้ตอบ เมื่อทำการส่งคำตอบแล้วจะไม่สามารถแก้ไขหรือทำใหม่ได้อีก"
        v-model="form.confirmed"
        name="confirmed"
    />
    <button
        :disabled="invalidForm"
        @click="form.post(routes.store)"
    >
        ส่งคำตอบ
    </button>
</template>

<script setup>

import {useForm} from '@inertiajs/inertia-vue3';
import FormSelect from '../../Components/Controls/FormSelect.vue';
import FormCheckbox from '../../Components/Controls/FormCheckbox.vue';
import {computed} from 'vue';

const props = defineProps({
    title: {type: String, required:true},
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
