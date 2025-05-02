<script setup>
import { cn } from '@/libraries/shadcn/utils.js';
import { Label } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
    for: { type: String, required: false },
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
    <Label
        v-bind="delegatedProps"
        :class="cn('text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70', props.class)"
    >
        <slot />
    </Label>
</template>
