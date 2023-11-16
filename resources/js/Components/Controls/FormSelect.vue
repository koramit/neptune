<template>
    <div>
        <div class="flex justify-between">
            <label
                v-if="label"
                :for="name"
                class="block text-base font-medium"
            >{{ label }}</label>
            <span class="text-sm text-slate-500">จำเป็น</span>
        </div>
        <!--        <label
            v-if="label"
            :for="name"
            class="block text-sm font-medium text-slate-700"
        >{{ label }}</label>-->
        <select
            id="name"
            name="name"
            class="mt-1 block w-full rounded-md border-slate-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
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
const props = defineProps({
    name: {type: String, required: true},
    label: {type:[String, null], default: null},
    options: {type: Array, required: true},
    modelValue: {type: [String, Number, null], required: true},
});
const emits = defineEmits(['update:modelValue']);

// if options has only one element, set it as default
if(props.options.length === 1) {
    emits('update:modelValue', props.options[0]);
}
</script>

<style scoped>

</style>
