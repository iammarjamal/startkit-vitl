<script setup>
import App from "@/layouts/app.vue";
import { trans } from 'inertia-translations';

const options = [
    {
        name: "Fruit",
        children: [
            { name: "Apple" },
            { name: "Banana" },
            { name: "Orange" },
            { name: "Honeydew" },
            { name: "Grapes" },
            { name: "Watermelon" },
            { name: "Cantaloupe" },
            { name: "Pear" },
        ],
    },
    {
        name: "Vegetable",
        children: [
            { name: "Cabbage" },
            { name: "Broccoli" },
            { name: "Carrots" },
            { name: "Lettuce" },
            { name: "Spinach" },
            { name: "Bok Choy" },
            { name: "Cauliflower" },
            { name: "Potatoes" },
        ],
    },
];

const checkboxOne = ref("");
</script>

<template>
    <App>
        <div
            class="flex flex-col justify-center items-center h-full min-h-screen w-full min-w-screen"
        >
            <WidgetsTheme icon />
            <UiLink href="/auth">
                <h1 class="text-dark dark:text-light text-9xl">
                    {{ trans("app.lang") }} {{ checkboxOne }}
                </h1>
            </UiLink>

            <div class="flex flex-col gap-2.5">
                <!-- <ElementsModal>
                    <template #button>
                        <ElementsButton>{{ t("hello") }}</ElementsButton>
                    </template>
                    <h1 class="text-dark dark:text-white">hello world !</h1>
                </ElementsModal> -->
            </div>

            <WidgetsLanguage inline />
            <WidgetsTheme inline />
        </div>
    </App>
</template>

<i18n>
{
  "ar": {
    "hello": "مرحباً",
  },
  "en": {
    "hello": "hello world!"
  }
}
</i18n>
