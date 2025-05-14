<script setup>
import { Head } from "@inertiajs/vue3";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    desc: {
        type: String,
        default: "",
    },
});

const title = ref(props.title);
const desc = ref(props.desc);

// Desktop Detection
const isDesktop = useMediaQuery("(min-width: 768px)");
</script>

<template>
    <Head>
        <title inertia>{{ title }}</title>
        <meta name="description" :content="desc" />

        <meta property="og:site_name" :content="title" />
        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="desc" />

        <meta property="twitter:title" :content="title" />
        <meta property="twitter:description" :content="desc" />
    </Head>

    <!-- App -->
    <main>
        <div class="flex h-full flex-col desktop" v-if="isDesktop">
            <slot></slot>
        </div>
        <div class="scrollbar-hide h-full select-none phone" v-else>
            <slot></slot>
        </div>
    </main>
    <!-- App -->
</template>

<style scoped>
.phone * {
    scroll-behavior: smooth !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-drag: none;
    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
</style>
