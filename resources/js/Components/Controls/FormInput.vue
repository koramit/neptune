<template>
    <div>
        <label
            v-if="label"
            class="block"
        >{{ label }}</label>
        <input
            class="border border-slate-800 rounded px-2 py-1"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script setup>
defineProps({
    label: {type: [String, null], default: null},
    type: {type: String, default: 'text'},
    modelValue: {type: [String,Number,null], required: true}
});
defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
