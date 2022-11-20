<template>
    <div class="relative flex items-start">
        <div class="flex h-5 items-center">
            <input
                :id="name"
                :aria-describedby="`${name}-description`"
                :name="name"
                type="checkbox"
                class="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                :checked="modelValue"
                @click="$emit('update:modelValue', !modelValue)"
            >
        </div>
        <div class="ml-3 text-sm">
            <label
                :for="name"
                class="font-medium"
            >{{ label }}</label>
        </div>
    </div>
<!--    <div>
        <label
            :for="name"
            class="flex items-start "
        >
            <input
                :id="name"
                :name="name"
                type="checkbox"
                :checked="modelValue"
                @click="$emit('update:modelValue', !modelValue)"
                class="mr-3"
            >
            <span class="inline-block">{{ label }}</span>
        </label>
    </div>-->
</template>

<script setup>
defineEmits(['update:modelValue']);
defineProps({
    modelValue: {type: Boolean, default: false},
    name: {type: String, required: true},
    label: {type: [String, null], default: null},
});
</script>

<style scoped>

</style>
