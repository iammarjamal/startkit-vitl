<script setup>
import { cn } from '@/libraries/shadcn/utils.js';
import { ComboboxItem, useForwardPropsEmits } from 'radix-vue';
import { computed } from 'vue';

const props = defineProps({
    value: { type: null, required: true },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
});
const emits = defineEmits(['select']);

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ComboboxItem
        v-bind="forwarded"
        :class="
            cn(
                'hover:!bg-secondary-light dark:hover:!bg-secondary-dark focus:!bg-secondary-light dark:focus:!bg-secondary-dark relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-all duration-750 outline-none select-none ltr:!justify-start rtl:!justify-end',
                props.class,
            )
        "
    >
        <slot />
    </ComboboxItem>
</template>
