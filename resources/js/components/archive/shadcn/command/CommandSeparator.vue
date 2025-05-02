<script setup>
import { cn } from '@/libraries/shadcn/utils.js';
import { ComboboxSeparator } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxSeparator v-bind="delegatedProps" :class="cn('bg-border -mx-1 h-px', props.class)">
        <slot />
    </ComboboxSeparator>
</template>
