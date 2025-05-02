<script setup>
import Heading from '@/Components/Basics/Heading/Heading.vue';
import Paragraph from '../Paragraph/Paragraph.vue';

defineProps({
    type: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <div
        role="alert"
        class="my-3 rounded p-4 ltr:border-l-4 rtl:border-r-4"
        :class="{
            'border-blue-400 bg-blue-100 dark:border-blue-500 dark:bg-blue-900':
                !type,
            'border-green-400 bg-green-100 dark:border-green-500 dark:bg-green-900':
                type == 'success',
            'border-yellow-400 bg-yellow-100 dark:border-yellow-500 dark:bg-yellow-900':
                type == 'warning',
            'border-red-400 bg-red-100 dark:border-red-500 dark:bg-red-900':
                type == 'error',
        }"
    >
        <Paragraph
            size="xxs"
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
    </div>
</template>
