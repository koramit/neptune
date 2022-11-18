<template>
    <div>
        <label :for="name">
            <input
                :id="name"
                :name="name"
                type="checkbox"
                :checked="modelValue"
                @click="$emit('update:modelValue', !modelValue)"
            >
            {{ label }}
        </label>
    </div>
</template>

<script setup>
import {defineEmits,defineProps} from 'vue';
defineEmits(['update:modelValue']);
defineProps({
    modelValue: {type: Boolean, default: false},
    name: {type: String, required: true},
    label: {type: [String, null], default: null},
});
</script>

<style scoped>

</style>
