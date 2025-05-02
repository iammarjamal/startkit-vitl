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
    <p class="text-secondary" v-bind:class="class" :class="{ 
        'text-xs md:text-sm lg:text-md xl:text-lg': size == 'xxs',
        'text-sm md:text-md lg:text-lg xl:text-xl': size == 'xs',
        'text-md md:text-lg lg:text-xl xl:text-2xl': size == 'sm',
        'text-lg md:text-xl lg:text-2xl': size == 'md',
        'text-xl md:text-2xl lg:text-3xl': size == 'lg',
        'text-2xl md:text-3xl lg:text-4xl': size == 'xl',
        'text-3xl md:text-4xl lg:text-5xl': size == 'xxl',
        }">
        <slot />
    </p>
</template>