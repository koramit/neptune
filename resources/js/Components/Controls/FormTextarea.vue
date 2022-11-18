<template>
    <div>
        <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >{{ modelValue }}</textarea>
    </div>
</template>

<script setup>
import {defineEmits, defineProps} from 'vue';

defineEmits(['update:modelValue']);
defineProps({
    modelValue: {type: [String, null], required: true},
});
</script>

<style scoped>

</style>
