<template>
    <div class="bg-gradient-to-b from-[#232020] to-[40%] relative">
        <div v-for="img in images" class="relative -top-1 z-0">
            <img :src="img" class="rotate-180 w-full absolute">
        </div>
        <div class="pt-44 pb-10">
            <div v-motion-pop-visible class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image1" alt="image1" class="object-cover h-full w-full rounded-[200px] brightness-[.3]">
                <div v-for="item in items" class="absolute w-full top-0 py-6 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                    <h1>{{ item.title1 }}</h1>
                    <img :src="PohonWayang" class="w-[130px] mx-auto">
                    <span class="font-mono text-xl">{{ item.day }}</span>
                    <div class="flex font-sans tracking-wider justify-center border-[2px] border-x-0 items-center">
                        <h1 class="px-2 text-[20px]">{{ item.month }}</h1>
                        <h1 class="px-2">{{ item.date }}</h1>
                        <h1 class="px-2 text-[20px]">{{ item.year }}</h1>
                    </div>
                    <div class="py-4">
                        <h1 class="font-mono text-[12px]">{{ item.time }}</h1>
                        <h1 class="font-mono text-[12px] py-1">{{ item.street }}</h1>
                        <div @click="location" class="bg-[#442B1B] w-fit mx-auto py-2 px-2 rounded-md items-center flex cursor-pointer">
                            <v-icon name="si-googlemaps" animation="ring" scale="1.5" fill="white"/>
                            <h1 class="font-mono text-[12px]">{{ item.location }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-10 pb-10">
            <div v-motion-pop-visible class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <video :src="VideoMp4" autoplay loop playsinline muted class="object-cover h-full w-full rounded-[200px] brightness-[.5]"/>
                <div v-for="event in prewedding" class="absolute w-full top-0 py-6 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                    <h1>{{ event.title1 }}</h1>
                    <img :src="PohonWayang" class="w-[190px] mx-auto">
                    <div class="py-4">
                        <h1 class="font-mono text-[12px] py-2 mb-1">{{ event.street }}</h1>
                        <div @click="VideoYoutube" class="bg-[#442B1B] w-fit mx-auto py-2 px-2 rounded-md items-center flex cursor-pointer space-x-1">
                            <v-icon name="md-slowmotionvideo-sharp" animation="ring" scale="1.5" fill="white"/>
                            <h1 class="font-mono text-[12px]">{{ event.youtube }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-10 pb-44">
            <div v-motion-pop-visible class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image2" autoplay muted class="object-cover h-full w-full rounded-[200px] brightness-[.3]">
                <div v-for="event in events" class="absolute w-full top-0 py-6 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                    <h1>{{ event.title1 }}</h1>
                    <img :src="PohonWayang" class="w-[130px] mx-auto">
                    <span class="font-mono text-xl">{{ event.day }}</span>
                    <div class="flex font-sans tracking-wider justify-center border-[2px] border-x-0 items-center">
                        <h1 class="px-2 text-[20px]">{{ event.month }}</h1>
                        <h1 class="px-2">{{ event.date }}</h1>
                        <h1 class="px-2 text-[20px]">{{ event.year }}</h1>
                    </div>
                    <div class="py-4">
                        <h1 class="font-mono text-[12px]">{{ event.time }}</h1>
                        <h1 class="font-mono text-[12px]">{{ event.jam }}</h1>
                        <h1 class="font-mono text-[20px] py-1">{{ event.hiburan }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="img in images" class="absolute w-full -bottom-1 z-0">
            <img :src="img" class="w-full">
        </div>
    </div>
</template>

<script>
import FooterBanner1 from '../assets/footer-banner1.webp';
import FooterBanner2 from '../assets/footer-banner2.webp';
import FooterBanner3 from '../assets/footer-banner3.webp';
import VideoMp4 from '../assets/wedding-video.mp4';
import Image1 from '../assets/photo-wedding/edit/ijab-kobul.jpg';
import Image2 from '../assets/photo-wedding/edit/photo-hiburan.jpg';
import PohonWayang from '../assets/kelir-petir.webp';

const youtubeVideo = 'https://youtu.be/7EipXhF4knc';
const locationMaps = 'https://www.google.com/maps/place/Paud+Annisa/@-5.1767408,105.1847376,20.77z/data=!4m22!1m15!4m14!1m6!1m2!1s0x2e40b957bbf6c05d:0x1b9695b1c97e4fc!2sMetro,+Metro+Pusat,+Metro+City,+Lampung!2m2!1d105.3043378!2d-5.1254784!1m6!1m2!1s0x2e40b6136ee24507:0x4039d80b2210860!2sTegineneng,+Pesawaran+Regency,+Lampung!2m2!1d105.1776307!2d-5.1918346!3m5!1s0x2e40b73a3809a7d9:0xf5f4af50f81bbcaf!8m2!3d-5.1767355!4d105.1847592!16s%2Fg%2F11jr5zgkbh?entry=ttu'

export default {
    name: 'Page3',

    data() {
        return {
            Image1,
            Image2,
            PohonWayang,
            VideoMp4,
            items: [
                {
                    title1: 'Ijab Qabul',
                    day: 'KAMIS',
                    month: 'Agustus',
                    date: '31',
                    year: '2023',
                    time: '09.00 WIB Selesai',
                    street: 'Tegineneng - Sidobasuki',
                    location: 'Petunjuk Arah'
                }
            ],
            prewedding: [
                {
                    title1: 'Prewedding',
                    day: 'SABTU',
                    month: 'Juni',
                    date: '17',
                    year: '2023',
                    time: '14.00 WIB Selesai',
                    street: 'Bandung Ciwiday - Kawah Putih',
                    youtube: 'Lihat Video'
                }
            ],
            events: [
                {
                    title1: 'Hiburan',
                    day: 'KAMIS',
                    month: 'Agustus',
                    date: '31',
                    year: '2023',
                    time: 'SIANG - MALAM',
                    jam: '09.00 WIB - 22.00 WIB',
                    hiburan: 'CAMPURSARI'
                }
            ],
            images: [
                FooterBanner2,
                FooterBanner3,
                FooterBanner1
            ]
        }
    },

    methods: {
        location() {
            const i = locationMaps;
            window.open(i)
        },

        VideoYoutube() {
            const i = youtubeVideo;
            window.open(i)
        }
    }
}
</script>