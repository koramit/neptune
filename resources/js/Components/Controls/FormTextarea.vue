<template>
    <div>
        <label
            v-if="label"
            class="block"
        >{{ label }}</label>
        <textarea
            :value="textValue"
            @input="input"
        />
    </div>
</template>

<script setup>
import {ref} from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
    label: {type: [String, null], default: null},
    modelValue: {type: [Array, String, null], required: true},
    mode: {type: String, default: 'text'},
});

const textValue = ref(
    Array.isArray(props.modelValue) && props.mode === 'array'
        ? props.modelValue.join('\n')
        : props.modelValue
);

const input = (e) => {
    const value = e.target.value;
    if (props.mode === 'array') {
        emits('update:modelValue', value.split('\n'));
    } else {
        emits('update:modelValue', value);
    }
    textValue.value = value;
};
</script>
