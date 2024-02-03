<template>
    <div class="space-y-6 md:space-y-10 xl:space-y-12">
        <component
            v-for="(question, key) in questions"
            :key="key"
            :is="resolveControlComponent(question.type)"
            v-model="form[question.title]"
            v-bind="{...question.props, required: true}"
        />
        <!-- <FormInput
            name="division"
            v-model="form.division"
            label="หน่วยงานของผู้ตอบ"
            :auto-fill="true"
        />-->
        <FormCheckbox
            class="mt-8"
            label="ฉันรับทราบว่าฟอร์มนี้เป็นแบบไม่เปิดเผยตัวตนผู้ตอบ เมื่อทำการส่งคำตอบแล้วจะไม่สามารถแก้ไขหรือทำใหม่ได้อีก"
            v-model="form.confirmed"
            name="confirmed"
        />
        <div>
            <button
                class="mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 disabled:bg-sky-600/40 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200"
                :disabled="invalidForm"
                @click="form.post(routes.store)"
            >
                ส่งคำตอบ
            </button>
            <!-- <small
                v-if="invalidForm"
                class="mt-4 block italic text-sx"
            >* หากเลือกคำตอบซ้ำจะไม่สามารถส่งคำตอบได้</small>-->
        </div>
    </div>
</template>

<script setup>

import {useForm} from '@inertiajs/inertia-vue3';
import FormCheckbox from '../../Components/Controls/FormCheckbox.vue';
import {computed} from 'vue';
import {useResolveControlComponent} from '../../functions/useResolveControlComponent.js';
// import FormInput from '../../Components/Controls/FormInput.vue';

const props = defineProps({
    questions: {type: Array, required:true},
    division: {type: [String,null], required: true},
    routes: {type: Object, required: true},
});

let preForm = {
    division: props.division,
    confirmed: false,
};
props.questions.forEach(q => {
    preForm[q.title] = q.type === 'FormInput' ? 'ไม่มี' : null;
});
const form = useForm({...preForm});

const invalidForm = computed(() => {
    let qq = props.questions.map(q => q.title);
    // qq.push('division');
    qq.push('confirmed');

    // required all fields
    let invalid = false;
    for(let key in qq) {
        invalid = invalid || !form[qq[key]];
    }

    return invalid;

    // check unique
    /*if (invalid) {
        return invalid;
    }

    let ans = props.questions.map(q => form[q.title]);
    let unique = [...new Set(ans)];

    return unique.length !== ans.length;*/
});

const {resolveControlComponent} = useResolveControlComponent();
</script>

<style scoped>

</style>
