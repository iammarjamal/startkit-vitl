@props([ 
    // Add Custom Class
    'class',
])

<a class="{{ $class ?? '' }} text-dark dark:text-light" {{ $attributes }} wire:navigate>
    {{ $slot }}
</a>