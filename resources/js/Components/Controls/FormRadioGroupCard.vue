<template>
    <RadioGroup v-model="selectedOption">
        <RadioGroupLabel class="flex justify-between">
            <label
                v-if="label"
                :for="name"
                class="block text-base font-medium"
            >{{ label }}</label>
            <span class="text-sm text-slate-500">จำเป็น</span>
        </RadioGroupLabel>
        <div class="mt-1 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-6">
            <RadioGroupOption
                as="template"
                v-for="(option, key) in formOptions"
                :key="key"
                :value="option"
                v-slot="{ checked, active }"
            >
                <div :class="[checked ? 'border-transparent' : 'border-slate-300', active ? 'border-sky-500 ring-2 ring-sky-500' : '', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
                    <CircleCheckIcon
                        :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-sky-600 mr-3']"
                        aria-hidden="true"
                    />
                    <span class="flex flex-1">
                        <span class="flex flex-col">
                            <RadioGroupLabel
                                as="span"
                                class="block text-sm font-medium text-slate-900"
                            >{{ option.title }}</RadioGroupLabel>
                            <RadioGroupDescription
                                v-if="option.description"
                                as="span"
                                class="mt-1 flex items-center text-sm text-slate-500"
                            >{{ option.description }}</RadioGroupDescription>
                            <RadioGroupDescription
                                v-if="option.image"
                                class="mt-4 flex items-center justify-center w-40 h-40 bg-sky-200 shadow rounded-full overflow-hidden"
                            ><img
                                class="h-36 w-36 object-contain"
                                :src="option.image"
                                alt="picture"
                                loading="lazy"
                            ></RadioGroupDescription>
                        </span>
                    </span>
                    <span
                        :class="[active ? 'border' : 'border-2', checked ? 'border-sky-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                        aria-hidden="true"
                    />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script setup>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import CircleCheckIcon from '../Icons/CircleCheckIcon.vue';
import {ref, watch} from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
    name: {type: String, required: true},
    label: {type: [String, null], default: null},
    options: {type: Array, required: true},
    modelValue: {type: [String, null], required: true},
});

const formOptions = [...props.options];
const selectedOption = ref({});
if (props.modelValue) {
    selectedOption.value = formOptions.find(option => option.value === props.modelValue || option.title === props.modelValue);
    console.log(selectedOption.value);
}

watch(
    () => selectedOption.value,
    (value) => {
        if (value.value) {
            emits('update:modelValue', value.value);
        } else {
            emits('update:modelValue', value.title);
        }
    }
);
</script>
