<script setup>
import { cn } from '@/libraries/shadcn/utils.js';

const props = defineProps({
    class: { type: null, required: false },
});
</script>

<template>
    <span :class="cn('text-muted-foreground ml-auto text-xs tracking-widest', props.class)">
        <slot />
    </span>
</template>
