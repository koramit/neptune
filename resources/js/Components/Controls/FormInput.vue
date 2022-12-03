<template>
    <div>
        <div class="flex justify-between">
            <label
                v-if="label"
                :for="name"
                class="block text-base font-medium"
            >{{ label }}</label>
            <span
                class="text-sm text-slate-500"
                v-if="required"
            >จำเป็น</span>
            <span
                class="text-sm text-slate-500"
                v-if="autoFill"
            >ข้อมูลอัตโนมัติ</span>
        </div>
        <input
            class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :readonly="readonly || autoFill"
        >
    </div>
</template>

<script setup>
defineProps({
    label: {type: [String, null], default: null},
    type: {type: String, default: 'text'},
    modelValue: {type: [String,Number,null], required: true},
    readonly: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    autoFill: {type: Boolean, default: false},
});
defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>
