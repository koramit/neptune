<template>
    <h1>dashboard</h1>
    <InertiaLink :href="routes.formsCreate">
        สร้างฟอร์ม
    </InertiaLink>
</template>

<script setup>
import {InertiaLink} from '@inertiajs/inertia-vue3';

defineProps({
    routes: {type: Object, required: true}
});
</script>

<style scoped>

</style>
