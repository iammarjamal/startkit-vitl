@props([
    'href' => '#',
    'disabled' => false
])

<a href="{{ $href }}"
   @if($disabled) data-disabled @endif
   class="relative flex cursor-default select-none hover:bg-neutral-100 items-center rounded px-2 py-1.5 text-sm outline-none transition-colors {{ $disabled ? 'pointer-events-none opacity-50' : '' }}">
   {{ $slot }}
</a>