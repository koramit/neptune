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
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {useResolveComponent} from '../functions/useResolveComponent.js';
import FormInput from '../Components/Controls/FormInput.vue';
import FormSelect from '../Components/Controls/FormSelect.vue';
import FormCheckbox from '../Components/Controls/FormCheckbox.vue';
import FormTextarea from '../Components/Controls/FormTextarea.vue';

const props = defineProps({
    formData: {type: Object, required: true},
    formConfigs: {type: Array, required: true},
});

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
