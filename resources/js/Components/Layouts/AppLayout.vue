<template>
    <div class="h-full">
        <InertiaLink
            :href="$page.props.appRoutes.logout"
            method="delete"
            as="button"
            type="button"
            class="ml-auto flex-shrink-0 rounded-full bg-slate-800 p-1 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 cursor-pointer"
        >
            ออกจากระบบ
        </InertiaLink>
        <div class="p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { InertiaLink } from '@inertiajs/inertia-vue3';
import { pageRoutines } from '../../functions/pageRoutines';

pageRoutines();
</script>
