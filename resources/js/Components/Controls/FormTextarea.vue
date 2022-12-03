<template>
    <div>
        <textarea
            :value="textValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
import {ref} from 'vue';
defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {type: [Array, String, null], required: true},
});

const textValue = ref(
    Array.isArray(props.modelValue)
        ? props.modelValue.join('\n')
        : props.modelValue
);
</script>
