<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: 'text',
    },
    required: {
        type: Boolean,
        default: false,
    },
    autofocus: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        default: null,
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    error: {
        type: String,
        default: null,
    },
    success: {
        type: Boolean,
        default: null,
    },
    success_msg: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    }
});

const emits = defineEmits(['update:modelValue']);

const updateValue = (value) => {
    emits('update:modelValue', value);
};
</script>

<template>
    <label class="text-zinc-900 dark:text-zinc-50">{{ label }}:</label>
    <div class="relative mt-2 rounded-md shadow-sm">
        <input
            autofocus="false"
            :id="id"
            :placeholder="placeholder"
            :type="type"
            :required="required"
            :autofocus="autofocus"
            :value="modelValue"
            autocomplete="true"
            :disabled="disabled"
            @input="updateValue($event.target.value)"
            class="block w-full p-2 transition duration-100 ease-in-out border rounded-md shadow-sm rtl:pl-8 ltr:pr-8 placeholder-zinc-400 dark:bg-zinc-700 dark:text-zinc-300 dark:placeholder-zinc-400 border-zinc-200 focus:ring-primary-400 focus:border-primary-400 dark:border-zinc-500 form-input sm:text-sm focus:outline-none"
            v-bind:class="class"
            :class="{'!border-red-500 !border-1 focus:!ring-red-400 focus:!border-red-400': error, '!border-green-500 !border-1 focus:!ring-green-400 focus:!border-green-400': success}"
            />
        <div v-if="icon" class="absolute inset-y-0 ltr:right-0 rtl:left-0 ltr:pr-3.5 rtl:pl-3.5 flex items-center pointer-events-none text-zinc-400" :class="{'!text-red-400': error, '!text-green-400': success}">
            <i :class="icon"></i>
        </div>
    </div>
    <p class="text-xs text-red-500 dark:text-red-400 mt-1 rtl:mr-1.5 ltr:ml-1.5" v-if="error">{{ error }}</p>
    <p class="text-xs text-green-500 dark:text-green-400 mt-1 rtl:mr-1.5 ltr:ml-1.5" v-if="success">{{ success_msg }}</p>
</template>