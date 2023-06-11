<template>
    <vue-countdown 
    :time="time" 
    :interval="1000" 
    v-slot="{ days, hours, minutes, seconds }"
    >
    <div class="flex flex-row justify-center space-x-2 text-[12px] font-base-wedding font-bold">
        <div class="day">
            <h1 class="text-[20px]">{{ days }}</h1>
            <span>DAY</span>
        </div>
        <div class="hours">
            <h1 class="text-[20px]">{{ hours }}</h1>
            <span>HOURS</span>
        </div>
        <div class="minutes">
            <h1 class="text-[20px]">{{ minutes }}</h1>
            <span>MINUTES</span>
        </div>
        <div class="seconds">
            <h1 class="text-[20px]">{{ seconds }}</h1>
            <span>SECONDS</span>
        </div>
    </div>
    </vue-countdown>
</template>

<script>
export default {
    name: 'Countdown',

    data() {
        const now = new Date();
        const newYear = new Date(now.getFullYear(), 7, 31);

        return {
            time: newYear - now,
        }
    }
}
</script>