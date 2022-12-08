<template>
    <div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h1 class="flex items-center justify-center space-x-4">
                    <RocketLaunchIcon class="animate-pulse h-12 w-auto text-sky-600" />
                    <label class="text-sky-600 text-4xl italic">Neptune</label>
                </h1>
                <div class="mt-4 text-center text-sm text-slate-600 flex items-center justify-center space-x-2">
                    <p>Privacy first</p>
                    <UserShieldIcon class="w-4 h-4" />
                    <p>Online</p>
                    <CloudCheckIcon class="w-4 h-4" />
                    <p>Form</p>
                </div>
                <h2 class="mt-12 text-center text-3xl font-bold tracking-tight text-slate-900">
                    ลงชื่อเข้าใช้งาน
                </h2>
            </div>
            <form
                class="mt-8 space-y-6"
                action="#"
                method="POST"
                @submit.prevent="form.post(routes.login, {onError: () => form.processing = false})"
            >
                <input
                    type="hidden"
                    name="remember"
                    value="true"
                >
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label
                            for="login"
                            class="sr-only"
                        >ชื่อบัญชี</label>
                        <input
                            id="login"
                            name="login"
                            type="login"
                            autocomplete="login"
                            required=""
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            placeholder="ชื่อบัญชี"
                            v-model="form.login"
                        >
                    </div>
                    <div>
                        <label
                            for="password"
                            class="sr-only"
                        >รหัสผ่าน</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                            placeholder="รหัสผ่าน"
                            v-model="form.password"
                        >
                    </div>
                </div>
                <small class="text-sm text-red-700">{{ form.errors.login }}</small>

                <div class="flex items-center justify-end">
                    <!--                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                        >
                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-slate-900"
                        >Remember me</label>
                    </div>-->

                    <div class="text-sm">
                        <a
                            :href="routes.reset_password"
                            class="font-medium text-sky-600 hover:text-sky-500"
                        >จำรหัสผ่านไม่ได้ ?</a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200"
                        :disabled="form.processing"
                    >
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockIcon
                                class="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                                aria-hidden="true"
                            />
                        </span>
                        เข้าสู่ระบบ
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {useForm} from '@inertiajs/inertia-vue3';
import LockIcon from '../../Components/Icons/LockIcon.vue';
import RocketLaunchIcon from '../../Components/Icons/RocketLaunchIcon.vue';
import UserShieldIcon from '../../Components/Icons/UserShieldIcon.vue';
import CloudCheckIcon from '../../Components/Icons/CloudCheckIcon.vue';

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
