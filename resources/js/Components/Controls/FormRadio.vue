<template>
    <div
        v-for="(option, key) in options"
        :for="`${name}:${key}`"
        :key="key"
    >
        <label>
            <input
                type="radio"
                :id="`${name}:${key}`"
                :name="name"
                :value="option"
                @change="$emit('update:modelValue', $event.target.value)"
                :checked="modelValue === option"
            >{{ option }}
        </label>
    </div>
</template>

<script setup>
import {defineEmits,defineProps} from 'vue';

defineProps({
    name: {type: String, required: true},
    options: {type: Array, required: true},
    modelValue: {type: [String,Number,null], required: true},
});
defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
