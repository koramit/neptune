<template>
    <div class="h-full">
        <div class="p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { pageRoutines } from '../../functions/pageRoutines';

pageRoutines();
</script>
