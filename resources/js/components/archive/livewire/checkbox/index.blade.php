@props([
    // Checkbox ID
    'id' => 'checkbox',

    // Checkbox Label
    'label' => '',

    // Checkbox Type (native, primary, success, warning, danger)
    'type' => 'native',
])

@php
    $types = [
        'native' => [
            'bg' => 'bg-light border border-secondary-light dark:bg-dark dark:border-secondary-dark',
            'text' => 'text-dark dark:text-light',
        ],
        'primary' => [
            'bg' => 'bg-primary-light border border-primary-dark dark:bg-primary-dark dark:border-primary-light',
            'text' => 'text-primary-light-foreground dark:text-primary-dark-foreground',
        ],
        'success' => [
            'bg' => 'bg-success-light border border-success-dark dark:bg-success-dark dark:border-success-light',
            'text' => 'text-success-light-foreground dark:text-success-dark-foreground',
        ],
        'warning' => [
            'bg' => 'bg-warning-light border border-warning-dark dark:bg-warning-dark dark:border-warning-light',
            'text' => 'text-warning-light-foreground dark:text-warning-dark-foreground',
        ],
        'danger' => [
            'bg' => 'bg-danger-light border border-danger-dark dark:bg-danger-dark dark:border-danger-light',
            'text' => 'text-danger-light-foreground dark:text-danger-dark-foreground',
        ],
    ];
    $colorData = $types[$type] ?? $types['primary'];
@endphp

<div class="flex items-start mb-6">
    <div class="flex items-center flex-row gap-x-2 h-5">
        <input id="{{ $id }}" type="checkbox" {{ $attributes }} class="hidden peer">
        <label for="{{ $id }}"
            class="peer-checked:[&_svg]:scale-100 text-base [&_svg]:scale-0 select-none flex items-center space-x-2">
            <span
                class="flex items-center justify-center w-5 h-5 border-2 rounded custom-checkbox {{ $colorData['bg'] }}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="currentColor" class="w-3 h-3 {{ $colorData['text'] }} duration-300 ease-out">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </span>
        </label>
        <span class="text-dark dark:text-light">{{ $label }}</span>
    </div>
</div>
