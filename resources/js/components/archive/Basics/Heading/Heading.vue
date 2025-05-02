<script setup>
defineProps({
    class: {
        type: String,
        default: null,
    },
    size: {
        type: String,
        default: 'xxs'
    }
});
</script>

<template>
    <h1 class="font-bold text-primary" v-bind:class="class" :class="{ 
        'text-sm md:text-md lg:text-lg xl:text-xl': size == 'xxs',
        'text-md md:text-lg lg:text-xl xl:text-2xl': size == 'xs',
        'text-lg md:text-xl lg:text-2xl xl:text-3xl': size == 'sm',
        'text-xl md:text-2xl lg:text-3xl': size == 'md',
        'text-2xl md:text-3xl lg:text-4xl': size == 'lg',
        'text-3xl md:text-4xl lg:text-5xl': size == 'xl',
        'text-4xl md:text-5xl lg:text-6xl': size == 'xxl',
        }">
        <slot />
    </h1>
</template>