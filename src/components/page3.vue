<template>
    <div class="bg-gradient-to-b from-[#232020] to-[40%]">
        <div v-for="img in images" class="relative -top-1 z-0">
            <img :src="img" class="rotate-180 w-full absolute">
        </div>
        <div class="pt-36 pb-10">
            <div class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image1" alt="image1" class="object-cover h-full w-full rounded-[200px] brightness-[.3]">
                <div v-for="item in items" class="absolute w-full top-0 py-6 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                    <h1>{{ item.title1 }}</h1>
                    <img :src="PohonWayang" class="w-[150px] mx-auto">
                    <span class="font-mono text-xl">SABTU</span>
                    <div class="flex font-sans tracking-wider text-[20px] justify-center border-[2px] border-x-0">
                        <h1 class="px-2">Agustus</h1>
                        <h1 class="px-2">31</h1>
                        <h1 class="px-2">2023</h1>
                    </div>
                    <dir class="justify-center">
                        <h1 class="font-mono text-[12px]">12.00 WIB</h1>
                        <h1 class="font-mono text-[12px]">12.00 WIB</h1>
                        <h1 class="font-mono text-[12px]">12.00 WIB</h1>
                    </dir>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FooterBanner1 from '../assets/footer-banner1.webp';
import FooterBanner2 from '../assets/footer-banner2.webp';
import FooterBanner3 from '../assets/footer-banner3.webp';
import Image1 from '../assets/image1.jpeg';
import PohonWayang from '../assets/kelir-petir.webp';

export default {
    name: 'Page3',

    data() {
        return {
            Image1,
            PohonWayang,
            items: [
                {
                    title1: 'Ijap Kabul',
                }
            ],
            images: [
                FooterBanner2,
                FooterBanner3,
                FooterBanner1
            ]
        }
    }
}
</script>