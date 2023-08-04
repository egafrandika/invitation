<template>
    <div>
        <div class="sticky top-0 z-50">
            <img :src="Tirai" alt="header" class="w-full fixed-top z-50">
        </div>
        <div class="text-wrapper">
            <h1 class="text-center text-[20px] font-medium p-20 max-sm:p-5 mx-auto max-sm:w-60 font-base-wedding text-gray-900">
                We invited you to celebrate our Wedding Ceremony
            </h1>
        </div>
        <div class="w-full relative overflow-hidden">
            <div class="mx-auto border-[#C38154] border-[10px] max-w-[220px] h-[380px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image1" alt="image1" class="object-cover h-full w-full rounded-[200px]">
            </div>
            <div class="p-5 text-center relative z-50">
                <h1 class="font-second-wedding text-[50px]">Ega & Dika</h1>
                <CountdownWedding/>
                <div class="animate-pulse">
                    <div class="p-6">
                        <add-to-calendar-button 
                            class="bg-[#442B1B] w-fit mx-auto rounded-[8px] flex flex-row items-center shadow-lg shadow-slate-800"
                            name="Pernikahan Ega & Dika" 
                            description="Pengingat hari pernikahan Ega & Dika" 
                            startDate="2023-08-31"
                            startTime="08:15"
                            endTime="22:15"
                            location="Tegineneng, Lampung" 
                            options="'Google'" 
                            timeZone="Asia/Jakarta" 
                            iCalFileName="Pernikahan Ega & Dika"
                            buttonStyle="date" 
                            listStyle="modal" 
                            size="1"
                            debug
                        ></add-to-calendar-button>
                    </div>
                </div>
            </div>
            <div class="p-10">
                <img :src="FooterBanner2" alt="footer-banner2" class="absolute bottom-5 right-0 w-full h-auto">
                <img :src="FooterBanner3" alt="footer-banner3" class="absolute bottom-0 right-0 w-full h-auto">
                <img :src="Wayang2" alt="wayang2" class="absolute lg:w-[430px] md:w-[420px] sm:w-[350px] w-56 h-auto bottom-0 -right-[110px]">
                <img :src="Wayang1" alt="wayang1" class="absolute lg:w-72 md:w-72 sm:w-60 w-36 h-auto bottom-0 -left-[70px]">
                <img :src="FooterBanner1" alt="footer-banner1" class="absolute -bottom-1 left-0 w-full h-auto">
            </div>
        </div>
    </div>
</template>

<script>
import Tirai from '../assets/tirai.webp';
import Image1 from '../assets/image1.jpeg';
import Wayang1 from '../assets/wayang1.webp';
import Wayang2 from '../assets/wayang2.webp';
import FooterBanner1 from '../assets/footer-banner1.webp';
import FooterBanner2 from '../assets/footer-banner2.webp';
import FooterBanner3 from '../assets/footer-banner3.webp';
import CountdownWedding from '../components/countdown-wedding.vue';

export default{
    name: 'Page1',

    components: {
        CountdownWedding
    },

    data() {
        return {
            Tirai,
            Wayang1,
            Wayang2,
            Image1,
            FooterBanner1,
            FooterBanner2,
            FooterBanner3,
            counting: false
        }
    }
}
</script>