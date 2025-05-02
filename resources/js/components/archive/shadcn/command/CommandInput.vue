<script setup>
import { cn } from '@/libraries/shadcn/utils.js';
import { Search } from 'lucide-vue-next';
import { ComboboxInput, useForwardProps } from 'radix-vue';
import { computed, onMounted, ref } from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    type: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    autoFocus: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

// Disabled Focus Input
const disabledFocusInput = ref(true);
onMounted(() => {
    setTimeout(() => {
        disabledFocusInput.value = false;
    }, 200);
});
</script>

<template>
    <div class="border-secondary-light dark:border-secondary-dark flex items-center border-b px-3" cmdk-input-wrapper>
        <Search class="text-secondary-dark dark:text-secondary-light mr-2 h-4 w-4 shrink-0 opacity-50" />
        <ComboboxInput
            v-bind="{ ...forwardedProps, ...$attrs }"
            :disabled="disabledFocusInput"
            @focus="disabledFocusInput = false"
            @blur="disabledFocusInput = false"
            :class="
                cn(
                    'text-dark dark:text-light placeholder:text-secondary-dark dark:placeholder:text-secondary-light placeholder:text-muted-foreground flex h-10 w-full rounded-md border-0 bg-transparent py-3 text-sm !ring-0 outline-none placeholder:opacity-50 disabled:cursor-not-allowed disabled:opacity-50 ltr:!text-left rtl:!text-right',
                    props.class,
                )
            "
        />
    </div>
</template>
