<script setup>
const props = defineProps({
    icon:{
        type: String,
        default: null
    }
});
</script>

<template>
    <Link :href="href" class="">
        <div class="flex justify-between">
            <span class="p-button-label"><slot /></span>
            <span v-if="icon"><i :class="icon" class="rtl:mr-2 ltr:ml-2"></i></span>
        </div>
    </Link>
</template>