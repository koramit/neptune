<template>
    <div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
            <h1 class="text-center text-3xl font-bold tracking-tight text-slate-900">
                {{ title }}
            </h1>
            <h2 class="text-center text-xl italic tracking-tight">
                {{ message }}
            </h2>
            <div class="text-sm text-center">
                <InertiaLink
                    href="/"
                    class="font-medium text-sky-600 hover:text-sky-500"
                >
                    หน้าหลัก
                </InertiaLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import {InertiaLink} from '@inertiajs/inertia-vue3';

defineProps({
    title: {type: String, required: true},
    message: {type: String, required: true},
});
</script>
