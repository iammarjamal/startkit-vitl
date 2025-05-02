<script setup>
const props = defineProps({
    type: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    }
});
</script>

<template>
    <span class="inline-flex items-center justify-center px-2 rounded-full"
    :class="{
        'bg-blue-100 border-blue-400 dark:border-blue-500 dark:bg-blue-900': !type,
        'bg-green-100 border-green-400 dark:border-green-500 dark:bg-green-900': type == 'success',
        'bg-yellow-100 border-yellow-400 dark:border-yellow-500 dark:bg-yellow-900': type == 'warning',
        'bg-red-100 border-red-400 dark:border-red-500 dark:bg-red-900': type == 'error',
        }">
        <i></i>

        <Paragraph class="text-[16px]"
        :class="{
        '!text-blue-700 dark:!text-blue-200': !type,
        '!text-green-700 dark:!text-green-200': type == 'success',
        '!text-yellow-700 dark:!text-yellow-200': type == 'warning',
        '!text-red-700 dark:!text-red-200': type == 'error',
        }"
        v-bind:class="class"
        >
            <slot />
        </Paragraph>
    </span>
</template>