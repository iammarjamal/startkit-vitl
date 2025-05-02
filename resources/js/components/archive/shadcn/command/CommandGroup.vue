<script setup>
import { cn } from '@/libraries/shadcn/utils.js';
import { ComboboxGroup, ComboboxLabel } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    heading: { type: String, required: false },
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxGroup
        v-bind="delegatedProps"
        :class="
            cn(
                'text-foreground !border-secondary-light dark:!border-secondary-dark [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
                props.class,
            )
        "
    >
        <ComboboxLabel v-if="heading" class="text-muted-foreground px-2 py-1.5 text-xs font-medium">
            {{ heading }}
        </ComboboxLabel>
        <slot />
    </ComboboxGroup>
</template>
