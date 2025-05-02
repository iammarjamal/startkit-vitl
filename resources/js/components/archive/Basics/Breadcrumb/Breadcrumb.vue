<script setup>
defineProps({
    prefix: {
        type: String,
        default: null
    },
    prefix_url: {
        type: String,
        default: null
    }
});
</script>

<template>
    <div class="grid mt-4 mb-5 lg:grid-cols-2 lg:place-content-between place-content-start">
        <div class="my-2">
            <p class="text-3xl font-medium text-cairo text-zinc-900 dark:text-zinc-100"><slot /></p>
        </div>
        <div class="grid lg:place-content-end">
            <div class="mt-1 overflow-x-auto" aria-label="Breadcrumb">
                <ol role="list" class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                        <a class="block text-base text-zinc-700 dark:text-zinc-300">
                            <slot />
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <Link :href="prefix_url" class="block text-base text-gray-400 transition duration-150 ease-out hover:text-gray-500 hover:ease-in">
                            <p>{{ prefix }}</p>
                        </Link>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>