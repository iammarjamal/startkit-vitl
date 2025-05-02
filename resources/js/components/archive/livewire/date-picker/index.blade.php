@props([
    // Label input
    'label' => 'Select Date',

    // Default value
    'value',

    // Add Max Value
    'max',

    // Add Min Value
    'min',

    // Add Custom Class
    'class',
])

<div x-data="{
    datePickerOpen: false,
    datePickerValue: '{{ $value ?? '' }}',
    datePickerFormat: 'M d, Y',
    datePickerMonth: '',
    datePickerYear: '',
    datePickerDay: '',
    datePickerDaysInMonth: [],
    datePickerBlankDaysInMonth: [],
    datePickerMonthNames: new Array(12).fill(0).map((_, index) =>
        new Intl.DateTimeFormat(navigator.language, { month: 'short' }).format(new Date(2021, index))
    ),
    datePickerDays: new Array(7).fill(0).map((_, index) =>
        new Intl.DateTimeFormat(navigator.language, { weekday: 'short' }).format(new Date(2021, 0, index + 2))
    ),

    datePickerDayClicked(day) {
        let selectedDate = new Date(this.datePickerYear, this.datePickerMonth, day);
        this.datePickerDay = day;
        this.datePickerValue = this.datePickerFormatDate(selectedDate);
        this.datePickerOpen = false;
    },

    datePickerPreviousMonth() {
        if (this.datePickerMonth === 0) {
            this.datePickerYear--;
            this.datePickerMonth = 11;
        } else {
            this.datePickerMonth--;
        }
        this.datePickerCalculateDays();
    },

    datePickerNextMonth() {
        if (this.datePickerMonth === 11) {
            this.datePickerMonth = 0;
            this.datePickerYear++;
        } else {
            this.datePickerMonth++;
        }
        this.datePickerCalculateDays();
    },

    datePickerIsSelectedDate(day) {
        const d = new Date(this.datePickerYear, this.datePickerMonth, day);
        return this.datePickerValue === this.datePickerFormatDate(d);
    },

    datePickerIsToday(day) {
        const today = new Date();
        const d = new Date(this.datePickerYear, this.datePickerMonth, day);
        return today.toDateString() === d.toDateString();
    },

    datePickerCalculateDays() {
        let daysInMonth = new Date(this.datePickerYear, this.datePickerMonth + 1, 0).getDate();
        let dayOfWeek = new Date(this.datePickerYear, this.datePickerMonth).getDay();
        let blankdaysArray = [];
        for (let i = 1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }
        let daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        this.datePickerBlankDaysInMonth = blankdaysArray;
        this.datePickerDaysInMonth = daysArray;
    },

    datePickerFormatDate(date) {
        let formattedDay = this.datePickerDays[date.getDay()];
        let formattedDate = ('0' + date.getDate()).slice(-2);
        let formattedMonth = this.datePickerMonthNames[date.getMonth()];
        let formattedMonthShortName = formattedMonth.substring(0, 3);
        let formattedMonthInNumber = ('0' + (date.getMonth() + 1)).slice(-2);
        let formattedYear = date.getFullYear();

        if (this.datePickerFormat === 'M d, Y') {
            return `${formattedMonthShortName} ${formattedDate}, ${formattedYear}`;
        }
        if (this.datePickerFormat === 'MM-DD-YYYY') {
            return `${formattedMonthInNumber}-${formattedDate}-${formattedYear}`;
        }
        if (this.datePickerFormat === 'DD-MM-YYYY') {
            return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`;
        }
        if (this.datePickerFormat === 'YYYY-MM-DD') {
            return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`;
        }
        if (this.datePickerFormat === 'D d M, Y') {
            return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`;
        }
        return `${formattedMonth} ${formattedDate}, ${formattedYear}`;
    }
}" x-init="
    let currentDate = new Date();
    if (datePickerValue) {
        currentDate = new Date(Date.parse(datePickerValue));
    }
    datePickerYear = currentDate.getFullYear();
    datePickerYears = Array.from({ length: 100 }, (_, i) => currentDate.getFullYear() - 90 + i),
    datePickerMonth = currentDate.getMonth();
    datePickerDay = currentDate.getDay();
    datePickerValue = datePickerFormatDate(currentDate);
    datePickerCalculateDays();" 
    x-cloak>
    <div class="container">
        <div class="w-full mb-5">
            <label for="datepicker" class="block mb-1 font-bold text-dark dark:text-light">{{ $label }}:</label>
            <div class="relative w-[17rem]">
                <input x-ref="datePickerInput" type="text" {{ $attributes }} @click="datePickerOpen = !datePickerOpen"
                    x-model="datePickerValue" @keydown.escape="datePickerOpen = false"
                    class="flex w-full {{ $class ?? '' }} h-10 px-3 py-2 text-sm bg-light dark:bg-dark border rounded text-secondary-light dark:text-secondary-dark border-secondary-light dark:border-secondary-dark ring-offset-background placeholder:text-dark/70 dark:placeholder:text-light/70 focus:text-dark/70 dark:focus:text-light/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark/70 dark:focus:ring-light/70 disabled:cursor-not-allowed disabled:opacity-50"
                    readonly />
                <div @click="datePickerOpen = !datePickerOpen; if(datePickerOpen){ $refs.datePickerInput.focus() }"
                    class="absolute top-0 right-0 px-3 py-2 cursor-pointer text-dark dark:text-light">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div x-show="datePickerOpen" x-transition @click.away="datePickerOpen = false"
                    class="absolute top-0 left-0 max-w-lg p-4 mt-12 antialiased bg-light dark:bg-dark border rounded shadow min-w-[17rem] w-auto border-secondary-light dark:border-secondary-dark">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex flex-row gap-x-5 items-center">
                            <select x-model="datePickerMonth" @change="datePickerCalculateDays()"
                                class="max-w-24 font-bold text-dark dark:text-light">
                                <template x-for="(month, index) in datePickerMonthNames" :key="index">
                                    <option :value="index" x-text="month"
                                        :selected="datePickerMonth === index || index == datePickerMonth"></option>
                                </template>
                            </select>

                            <select x-model="datePickerYear" @change="datePickerCalculateDays()"
                                class="max-w-18 font-bold text-dark dark:text-light">
                                <template x-for="year in datePickerYears">
                                    <option :value="year" x-text="year"
                                        x-bind:selected="year == datePickerYear"></option>
                                </template>
                            </select>
                        </div>
                        <div>
                            <button @click="datePickerPreviousMonth()" type="button"
                                class="inline-flex p-1 transition duration-100 bg-light dark:bg-dark ease-in-out rounded-full cursor-pointer focus:outline-none focus:shadow-outline hover:bg-opacity-75">
                                <svg class="inline-flex w-6 h-6 text-dark dark:text-light" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button @click="datePickerNextMonth()" type="button"
                                class="inline-flex p-1 transition duration-100 bg-light dark:bg-dark ease-in-out rounded-full cursor-pointer focus:outline-none focus:shadow-outline hover:bg-opacity-75">
                                <svg class="inline-flex w-6 h-6 text-dark dark:text-light" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-7 mb-3">
                        <template x-for="(day, index) in datePickerDays" :key="index">
                            <div class="px-0.25">
                                <div x-text="day" class="text-xs font-bold text-center text-dark dark:text-light">
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="grid grid-cols-7">
                        <template x-for="blankDay in datePickerBlankDaysInMonth">
                            <div class="p-1 text-sm text-center border border-transparent"></div>
                        </template>
                        <template x-for="(day, dayIndex) in datePickerDaysInMonth" :key="dayIndex">
                            <div class="px-0.5 mb-1 aspect-square">
                                <div x-text="day" @click="datePickerDayClicked(day)"
                                    :class="{
                                        'font-bold text-dark dark:text-light': datePickerIsToday(day),
                                        'text-dark dark:text-light hover:bg-opacity-75': !datePickerIsToday(day) && !
                                            datePickerIsSelectedDate(day),
                                        'bg-dark dark:bg-light !text-light dark:!text-dark hover:bg-opacity-75': datePickerIsSelectedDate(
                                            day)
                                    }"
                                    class="flex items-center justify-center text-sm leading-none text-center rounded-full cursor-pointer h-7 w-7">
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>