@props([

])

<div x-data="{ dropdownOpen: false }" class="relative">
    <!-- زر التشغيل: يتم تمرير المحتوى الخاص به عبر الـ slot -->
    <div @click="dropdownOpen = !dropdownOpen">
        {{ $trigger }}
    </div>
    <!-- قائمة القائمة المنسدلة -->
    <div x-show="dropdownOpen"
         @click.away="dropdownOpen = false"
         x-transition:enter="ease-out duration-200"
         x-transition:enter-start="-translate-y-2"
         x-transition:enter-end="translate-y-0"
         class="absolute top-0 z-50 mt-12 -translate-x-1/2 left-1/2 min-w-[17rem] w-{{ $width }}"
         x-cloak>
         {{ $content }}
    </div>
</div>
