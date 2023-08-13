<template>
    <div class="bg-[#0d0c0c] w-full">
        <div class="w-[50%] max-sm:w-[80%] mx-auto text-center pb-10">
            <div class="leading-[22px]">
                <h1 v-motion-slide-visible-right class="text-[#ddcaca] text-center pt-10 font-third-wedding text-[30px]">Our</h1>
                <h1 v-motion-slide-visible-left class="text-[#ddcaca] text-center pb-4 font-third-wedding text-[50px]">Memory</h1>
            </div>
            <span v-motion-pop-visible class="text-[#cec3c3] font-four-wedding text-[15px]">
                Kisah hubungan kami yang selama ini tidak banyak orang ketahui. Begitu nano-nano, tetapi akhirnya memutuskan untuk menghadapi semua bersama.
            </span>
        </div>
        <div class="pb-10 w-[90%] mx-auto">
            <div v-motion-pop-visible id="indicators-carousel" class="relative w-full" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img :src="lamaran1" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img :src="lamaran2" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img :src="lamaran3" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>

            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-3 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        </div>
        <div class="text-[#ddcaca] text-center pb-10 pt-4 w-[90%] mx-auto">
            <h1 v-motion-slide-visible-left class="font-four-wedding text-[20px] leading-3">Our</h1>
            <h1 v-motion-slide-visible-right class="font-four-wedding text-[35px]">Gallery</h1>
            <span v-motion-slide-visible-bottom class="font-four-wedding text-[15px]">Sedikit karya fotografi sebagai kenang-kenangan bagi kami berdua.</span>
        </div>
        <div class="w-[90%] mx-auto pb-20">
            <div class="w-full">
                <div class="grid grid-cols-4 grid-rows-4 max-sm:grid-rows-2 max-sm:grid-cols-2 gap-2">
                    <div class="w-full row-span-1 md:row-span-1">
                        <img :src="Image1" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-2 md:col-span-2 md:row-span-1">
                        <img :src="Image2" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-1 md:row-span-1">
                        <img :src="Image3" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-1 md:col-span-2 md:row-span-0">
                        <img :src="Image4" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full md:col-span-2 md:row-span-1">
                        <img :src="Image5" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 md:col-span-1">
                        <img :src="Image6" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full md:col-span-2 md:row-span-1">
                        <img :src="Image7" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-2 md:row-span-1">
                        <img :src="Image8" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:row-span-1">
                        <img :src="Image9" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:w-full md:row-span-1 md:col-span-3">
                        <img :src="Image10" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:col-span-3 md:row-span-1">
                        <img :src="Image11" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:col-span-1">
                        <img :src="Image12" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-1 md:row-span-2">
                        <img :src="Image13" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-2 md:col-span-2">
                        <img :src="Image14" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-1 md:row-span-2">
                        <img :src="Image15" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-1 md:col-span-2 md:row-span-2">
                        <img :src="Image16" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1">
                        <img :src="Image17" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full">
                        <img :src="Image18" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-2 md:row-span-1">
                        <img :src="Image19" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-1">
                        <img :src="Image20" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lamaran1 from '../assets/lamaran1.jpeg';
import lamaran2 from '../assets/lamaran2.jpeg';
import lamaran3 from '../assets/lamaran3.jpeg';
import ImagePhoto from '../assets/image1.jpeg';
import Image1 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery1.jpg';
import Image2 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery2.jpg';
import Image3 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery3.jpg';
import Image4 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery4.jpg';
import Image5 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery5.jpg';
import Image6 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery6.jpg';
import Image7 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery7.jpg';
import Image8 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery8.jpg';
import Image9 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery9.jpg';
import Image10 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery10.jpg';
import Image11 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery11.jpg';
import Image12 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery12.jpg';
import Image13 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery13.jpg';
import Image14 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery14.jpg';
import Image15 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery15.jpg';
import Image16 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery16.jpg';
import Image17 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery17.jpg';
import Image18 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery18.jpg';
import Image19 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery19.jpg';
import Image20 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery20.jpg';

export default {
    name: 'Page4',

    data() {
        return {
            lamaran2,
            lamaran1,
            lamaran3,
            ImagePhoto,
            Image1,
            Image2,
            Image3,
            Image4,
            Image5,
            Image6,
            Image7,
            Image8,
            Image9,
            Image10,
            Image11,
            Image12,
            Image13,
            Image14,
            Image15,
            Image16,
            Image17,
            Image18,
            Image19,
            Image20
        }
    }
}
</script>