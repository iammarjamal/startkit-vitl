<script setup>
const props = defineProps({
    value: {
        type: String,
        default: null
    },
    img: {
        type: Boolean,
        default: null
    },
    class: {
        type: String,
        default: null
    }
});
</script>

<template>
    <img v-if="img" :src="img" alt="avatar" :class="[props.class, 'object-cover w-full h-full']" />
    <img v-if="!img" :src="'https://ui-avatars.com/api/?name='+value+'&background=3b82f6&color=fff'" alt="avatar" :class="[props.class, 'object-cover w-full h-full']" />
</template>