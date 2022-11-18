<template>
    <h1>ลงชื่อเข้าใช้งาน</h1>
    <div>
        <label>ชื่อบัญชี :</label>
        <input
            type="text"
            v-model="form.login"
        >
        <small class="text-red-400 text-sm">{{ form.errors.login }}</small>
    </div>
    <div>
        <label>รหัสผ่าน :</label>
        <input
            type="password"
            v-model="form.password"
        >
    </div>
    <button @click="form.post(routes.login)">
        เข้าสู่ระบบ
    </button>
</template>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';

defineProps({
    routes: {type: Object, required: true},
});

const form = useForm({
    login: null,
    password: null,
});
</script>

<style scoped>

</style>
