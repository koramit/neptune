<template>
    <div>
        <select
            class="w-full"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option
                hidden
                :selected="!modelValue"
            >
                โปรดเลือก
            </option>
            <option
                v-for="(option, key) in options"
                :key="key"
                :value="option"
                :selected="modelValue === option"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script setup>
import {defineEmits,defineProps} from 'vue';

defineProps({
    options: {type: Array, required: true},
    modelValue: {type: [String, Number, null], required: true},
});
defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
