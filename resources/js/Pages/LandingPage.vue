<template>
    <h1 class="text-amber-400 text-2xl">
        Welcome
    </h1>
    <div class="my-10 border-2 border-sky-700">
        <h2>dynamic component</h2>
        <component
            v-for="(config, key) in formConfigs"
            :key="key"
            :is="resolveControlComponent(config.component)"
            v-bind="config.props"
            v-model="form[config.props.name]"
        />
    </div>
    <div class="my-10 border-2 border-sky-700">
        <h2>form designer</h2>
        <div>
            <label>label</label>
            <FormInput v-model="field.label" />
            <label>component</label>
            <FormSelect
                name="component"
                v-model="field.component"
                :options="['FormInput','FormSelect','FormRadio','FormTextarea']"
            />
            <label>choices</label>
            <FormTextarea v-model="field.options" />
            <FormCheckbox
                name="required"
                v-model="field.required"
                label="required"
            />
        </div>
        <button
            class="p-2 border"
            @click="addField"
        >
            add
        </button>
        <hr>
        <FormRadioGroupCard
            label="โปรดเลือกคนดี"
            :options="[
                { title: 'ไม่ขอเสนอชื่อผู้ใด', description: null, image: null, value: 'ไม่ขอเสนอชื่อผู้ใด|หน่วย' },
                { title: 'นางสาวเขมจิรา การเกตกลาง', description: 'นักวิชาการสถิติ', image: 'https://med-cm-website.s3.ap-southeast-1.amazonaws.com/public/images/person/22/VNRtZGS6ADpFLII500RztEE0mYrkxbZAbi5agRTI.jpg', value: 'นางสาวเขมจิรา การเกตกลาง|วิจัย' },
                { title: 'นางสาวนิษฐกานต์ นภนที', description: 'เจ้าหน้าที่บริหารงานทั่วไป', image: 'https://med-cm-website.s3.ap-southeast-1.amazonaws.com/public/images/person/22/Als0qsFwncVMCrXTY6MGppgntYeS4nFpxdzz5r8L.jpg', value: 'นางสาวนิษฐกานต์ นภนที|วิจัย' },
                { title: 'นางสาววชิรินทรา ปาลกะวงศ์ ณ อยุธยา', description: 'เจ้าหน้าที่วิจัย', image: 'https://med-cm-website.s3.ap-southeast-1.amazonaws.com/public/images/person/22/kn1i2aVezLlKVUJpv9R4PTVKwycRkYabI6tAER1W.jpg', value: 'นางสาววชิรินทรา ปาลกะวงศ์ ณ อยุธยา|วิจัย' },
                { title: 'นางสาวปวีณา วามะลุน', description: 'พยาบาล', image: 'https://med-cm-website.s3.ap-southeast-1.amazonaws.com/public/images/person/22/UKg1apmjBzlxL2X3pkO1NDE0Em1TyviCo9wWecs8.jpg', value: 'นางสาวปวีณา วามะลุน|วิจัย' },
            ]"
            v-model="kondee"
        />
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {useResolveComponent} from '../functions/useResolveComponent.js';
import FormInput from '../Components/Controls/FormInput.vue';
import FormSelect from '../Components/Controls/FormSelect.vue';
import FormCheckbox from '../Components/Controls/FormCheckbox.vue';
import FormTextarea from '../Components/Controls/FormTextarea.vue';
import FormRadioGroupCard from '../Components/Controls/FormRadioGroupCard.vue';

const props = defineProps({
    formData: {type: Object, required: true},
    formConfigs: {type: Array, required: true},
});

const kondee = ref('ไม่ขอเสนอชื่อผู้ใด|หน่วย');

const form = reactive({...props.formData});
const {resolveControlComponent} = useResolveComponent();

const field = reactive({
    name: null,
    label: null,
    component: null,
    options: null,
    required: false,
    props: {},
});

const fields = ref([]);
const addField = () => {
    fields.value.push(field);
};


</script>
