<template>
    <InertiaLink
        :href="routes.forms_create"
        v-if="can.create_form"
    >
        สร้างฟอร์ม
    </InertiaLink>
    <InertiaLink
        href="/f/dJ"
        class="text-sky-600"
    >
        โหวตเสนอชื่อโครงการคนดีฯ ประจำปี 2565 รอบตัดสิน
    </InertiaLink>
    <div
        class="mt-8 space-y-4"
    >
        <div
            v-for="form in forms"
            :key="form.hashed_key"
            class="space-x-3"
        >
            <span>{{ form.title }}</span>
            <InertiaLink
                :href="form.routes.edit"
                class="text-sky-600"
            >
                แก้ไข
            </InertiaLink>
            <InertiaLink
                :href="form.routes.show"
                class="text-sky-600"
            >
                แสดง
            </InertiaLink>
            <InertiaLink
                :href="form.routes.duplicate"
                as="button"
                method="post"
                class="text-sky-600"
            >
                ทำซ้ำ
            </InertiaLink>
            <a
                class="text-sky-600 cursor-pointer"
                :href="form.routes.responses_export"
            >Excel-คำตอบ</a>
            <a
                class="text-sky-600 cursor-pointer"
                :href="form.routes.participants_export"
            >Excel-ผู้ตอบ</a>
        </div>
    </div>
</template>

<script setup>
import {InertiaLink} from '@inertiajs/inertia-vue3';

defineProps({
    routes: {type: Object, required: true},
    can: {type: Object, required: true},
    forms: {type: Array, required: true},
});
</script>

<style scoped>

</style>
