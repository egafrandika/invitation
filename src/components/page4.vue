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
        <div class="pb-10">
            <div v-motion-pop-visble class="bg-[#ddcaca] w-[90%] mx-auto pb-10">
                <img :src="ImagePhoto" class="w-[90%] mx-auto pt-5 drop-shadow-lg">
                <div class="py-4 flex items-center justify-center">
                    <v-icon name="co-calendar" animation="ring" scale="1.5" fill="#57C181"/>
                    <h1 class="font-serif px-2 text-[#403e3e]">25 Agustus 2018</h1>
                </div>
                <div class="text-center leading-tight px-6">
                    <h1 class="font-four-wedding text-[20px] text-[#403e3e] pt-2 md:pb-5">Petunangan</h1>
                    <span class="text-[12px] font-four-wedding">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, quidem alias. Optio, at! Vel voluptatibus facilis iusto provident sint nobis recusandae voluptatum ipsam magni, esse id pariatur, ea harum laudantium dolorem neque magnam alias maiores. Itaque magni voluptates quam cupiditate?</span>
                </div>
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
                    <div class="w-full row-span-1 md:row-span-2">
                        <img :src="Image1" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-2 md:col-span-2">
                        <img :src="Image2" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full row-span-1 md:row-span-2">
                        <img :src="Image3" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-1 md:col-span-2 md:row-span-2">
                        <img :src="Image4" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1">
                        <img :src="Image6" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full">
                        <img :src="Image5" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full">
                        <img :src="Image7" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-2">
                        <img :src="Image8" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:row-span-2">
                        <img :src="Image9" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:full md:row-span-2">
                        <img :src="Image10" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:col-span-1">
                        <img :src="Image11" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:col-span-2">
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
                    <div class="w-full">
                        <img :src="Image19" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="w-full col-span-1 row-span-2">
                        <img :src="Image20" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                    <div class="md:row-span-2">
                        <img :src="Image21" alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
import Image21 from '../assets/photo-wedding/edit/photo-gallery/photo-gallery21.jpg';

export default {
    name: 'Page4',

    data() {
        return {
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
            Image20,
            Image21
        }
    }
}
</script>