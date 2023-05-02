<template>
    <div class="relative">
        <div
            class="fixed inset-0 z-10"
            @click="open = false"
            v-if="open"
        />
        <div class="w-full">
            <div class="flex justify-between">
                <label
                    v-if="label"
                    :for="name"
                    class="block text-base font-medium"
                >{{ label }}</label>
                <span class="text-sm text-slate-500">จำเป็น</span>
            </div>
            <div class="relative">
                <input
                    type="text"
                    class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    @input="search"
                    :id="name"
                    :name="name"
                    ref="input"
                    :value="modelValue"
                    @blur="validate"
                    placeholder="โปรดพิมพ์เพื่อค้นหา"
                >
                <!--                :class="{ '!border-red-400 !text-red-400': error }"
                    :disabled="disabled"-->
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <Transition name="fade-appear">
            <div
                class="absolute mt-1 bg-white rounded border-2 border-sky-500 shadow-xl w-full max-h-44 py-2 overflow-y-scroll z-20 origin-top"
                :class="{ 'scale-100 opacity-100': open }"
                v-if="open"
            >
                <button
                    class="block w-full py-1 px-2 lg:px-3 hover:bg-primary hover:text-accent text-left"
                    v-for="(item, key) in items"
                    :key="key"
                    @click="selectItem(item)"
                >
                    {{ item }}
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import throttle from 'lodash/throttle';
import {ref} from 'vue';
const props = defineProps({
    name: {type: String, required: true},
    label: {type:[String, null], default: null},
    options: {type: Array, required: true},
    modelValue: {type: [String, Number, null], required: true},
});
const emits = defineEmits(['update:modelValue']);

const items = ref([]);
const input = ref(null);
const open = ref(false);
const search = throttle(function () {
    emits('update:modelValue', input.value.value);

    if (input.value.value.length > 0) {
        items.value = props.options.filter((item) => {
            return item.toLowerCase().includes(input.value.value.toLowerCase());
        });
        open.value = items.value.length > 0;
    } else {
        items.value = [];
        open.value = false;
    }
}, 300);

const selectItem = (item) => {
    input.value.value = item;
    open.value = false;
    emits('update:modelValue', item);
};

const validate = () => {
    if (props.options.includes(input.value.value)) {
        return;
    }

    input.value.value = null;
    emits('update:modelValue', null);
};
</script>

<style scoped>

</style>
