<template>
    <div>
        <input
            class="border border-slate-800 rounded px-2 py-1"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
    type: {type: String, default: 'text'},
    modelValue: {type: [String,Number,null], required: true}
});
defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
