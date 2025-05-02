<script setup>
import { ref, watch } from 'vue';
import { useStorage } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';

import Select from '@/components/elements/select/index.vue';

const { t } = useI18n();

const props = defineProps({
    icon: {
        type: Boolean,
        default: true
    },
    iconClass: {
        type: String,
        default: ""
    },
    inline: {
        type: Boolean,
        default: false
    },
    inlineClass: {
        type: String,
        default: ""
    }
});

const StorageLanguage = useStorage('language');
const switchLanguage = (lang) => {
    StorageLanguage.value = lang;
};

const options = ref([
    { value: 'ar', label: "اللغة العربية", selected: StorageLanguage.value === 'ar' ? true : false },
    { value: 'en', label: "English Language", selected: StorageLanguage.value === 'en' ? true : false }
]);

const selectOption = ref('');
watch(selectOption, (lang) => {
    switchLanguage(lang);
});
</script>

<template>
    <div v-if="icon">
        <a href="#" class="cursor-pointer"
            v-on:click="StorageLanguage === 'ar' ? switchLanguage('en') : switchLanguage('ar')">
            <Icon icon="mdi:language" class="size-6 text-dark dark:text-light" />
        </a>
    </div>

    <div v-if="inline">
        <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center justify-start">
                <h1 class="text-xl font-bold">{{ t('body.language') }}</h1>
            </div>
            <div class="flex flex-row items-center justify-end">
                <Select :placeholder="t('body.selectPlaceholder')" :options="options" v-model="selectOption"></Select>
            </div>
        </div>
    </div>
</template>


<i18n>
    {
        "ar": {
            "body": {
                "language": "لغة العرض",
                'selectPlaceholder': "اختر لغة العرض",
            },
        },
        "en": {
            "body": {
                "language": "Language",
                'selectPlaceholder': "Choose preferred Language",
            }
        }
    }
</i18n>
