<template>
    <Link
        :href="routes.forms_create"
        v-if="can.create_form"
    >
        สร้างฟอร์ม
    </Link>
<!--    <Link
        :href="routes.fix_form"
        class="text-sky-600"
    >
        เสนอชื่อบุคลากรสายสนับสนุนเพื่อเป็นตัวแทนของกลุ่มบุคลากรสายสนับสนุนวาระ ปี 2566
    </Link>-->
    <div
        class="mt-8 space-y-4"
    >
        <div
            v-for="form in forms"
            :key="form.hashed_key"
        >
            <label>{{ form.title }}</label>
            <div class="space-x-3">
                <Link
                    :href="form.routes.edit"
                    class="text-sky-600"
                >
                    แก้ไข
                </Link>
                <Link
                    :href="form.routes.show"
                    class="text-sky-600"
                >
                    แสดง
                </Link>
                <Link
                    :href="form.routes.duplicate"
                    as="button"
                    method="post"
                    class="text-sky-600"
                >
                    ทำซ้ำ
                </Link>
                <a
                    class="text-sky-600 cursor-pointer"
                    :href="form.routes.responses_export"
                >Excel-คำตอบ</a>
                <a
                    class="text-sky-600 cursor-pointer"
                    :href="form.routes.participants_export"
                >Excel-ผู้ตอบ</a>
                <span>เชิญ {{ form.invitees }} ท่าน ตอบแล้ว {{ form.responses }}</span>
            </div>
        </div>
    </div>
    <div class="mt-8 space-y-4">
        <div
            v-for="form in invitations"
            :key="form.hashed_key"
            class="space-x-3"
        >
            <Link
                :href="form.routes.show"
                class="text-sky-600"
            >
                <span>{{ form.title }}</span>
            </Link>
        </div>
    </div>
</template>

<script setup>
import {Link} from '@inertiajs/inertia-vue3';

defineProps({
    routes: {type: Object, required: true},
    can: {type: Object, required: true},
    forms: {type: Array, required: true},
    invitations: {type: Array, required: true},
});
</script>

<style scoped>

</style>
