import { defineConfig } from "vite";
import { resolve } from "node:path";
import path from "path";

import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

import MotionResolver from "motion-v/resolver";
import RekaResolver from "reka-ui/resolver";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/",
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        AutoImport({
            imports: [
                "vue",
                "@vueuse/core",
                {
                    dayjs: [["default", "dayjs"]],
                },
                {
                    "@inertiajs/vue3": ["useForm", "usePage"],
                },
                {
                    "vue-i18n": [
                        "useI18n",
                        ["t", "useI18n"],
                    ],
                },
            ],
        }),
        Components({
            dirs: ["resources/js/components"],
            directoryAsNamespace: true,
            deep: true,
            extensions: ["vue", "ts"],
            resolvers: [RekaResolver(), MotionResolver()],
        }),
        VueI18nPlugin(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
            "ziggy-js": resolve(__dirname, "vendor/tightenco/ziggy"),
        },
    },
});
