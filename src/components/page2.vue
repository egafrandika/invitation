<template>
    <div class="bg-[#0d0c0c]">
        <h1 class="text-[#ddcaca] font-serif text-center text-[40px] pb-9 pt-2">The Bride</h1>
        <div class="flex flex-row justify-center pl-6">
            <div class="border-[#C38154] border-[10px] max-w-[200px] h-[330px] max-sm:w-[340px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image1" alt="image1" class="object-cover h-full w-full rounded-[200px]">
            </div>
            <div class="flex flex-col justify-items-end text-[#ddcaca] pl-6 pr-6" v-for="item in Girl">
                <h1 class="font-second-wedding text-[50px] text-right">{{ item.girlTitle }}</h1>
                <div class="flex flex-col text-[15px] font-base-wedding text-right max-w-xs">
                    <span class="pb-2">{{ item.desc }}</span>
                    <div class="flex items-center bg-[#442B1B] w-fit px-4 py-1 rounded-md self-end">
                        <v-icon name="pr-instagram" animation="ring" scale="1.5" fill="white"/>
                        <span>{{ item.media }}</span>
                    </div>
                    <div class="py-2 max-sm:text-[11px]">
                            <v-icon name="ri-double-quotes-l" animation="ring" scale="0.5" fill="white"/>
                                {{ item.text }}
                            <v-icon name="ri-double-quotes-r" animation="ring" scale="0.5" fill="white"/>
                        <h2 class="text-right"> - Ega</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-9 pb-9 flex space-x-2 overflow-auto">
            <div v-for="img in images" class="flex-shrink-0">
                <img :src="img" class="w-auto h-[200px] rounded-md"/>
            </div>
        </div>
        <h1 class="text-[#ddcaca] font-serif text-center text-[40px] pt-9 pb-9">The Groom</h1>
        <div class="flex flex-row-reverse justify-center pr-6">
            <div class="border-[#C38154] border-[10px] max-w-[200px] h-[330px] max-sm:w-[340px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image1" alt="image1" class="object-cover h-full w-full rounded-[200px]">
            </div>
            <div class="flex flex-col justify-items-end text-[#ddcaca] px-6" v-for="item in Man">
                <h1 class="font-second-wedding text-[50px]">{{ item.manTitle }}</h1>
                <div class="flex flex-col text-[15px] font-base-wedding max-w-xs">
                    <span class="pb-2">{{ item.desc }}</span>
                    <div class="flex items-center justify-start bg-[#442B1B] w-fit px-4 py-1 rounded-md">
                        <v-icon name="pr-instagram" animation="ring" scale="1.5" fill="white"/>
                        <span>{{ item.media }}</span>
                    </div>
                    <div class="py-2 max-sm:text-[11px]">
                            <v-icon name="ri-double-quotes-l" animation="ring" scale="0.5" fill="white"/>
                            {{ item.text }}
                            <v-icon name="ri-double-quotes-r" animation="ring" scale="0.5" fill="white"/>
                        <h2 class="text-left"> - Dika</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-9 pb-[50px] flex space-x-2 overflow-x-auto">
            <div v-for="img in images" class="flex-shrink-0">
                <img :src="img" class="w-auto h-[200px] rounded-md"/>
            </div>
        </div>
    </div>
</template>

<script>
import Image1 from '../assets/image1.jpeg';
import Photo1 from '../assets/image1.jpeg';
import Photo2 from '../assets/image1.jpeg';
import Photo3 from '../assets/image1.jpeg';
import Photo4 from '../assets/image1.jpeg';
import Photo5 from '../assets/image1.jpeg';
import Photo6 from '../assets/image1.jpeg';
import Photo7 from '../assets/image1.jpeg';

export default {
    name: 'Page2',

    data() {
        return {
            Image1,
            Man: [
                {
                    manTitle: 'Dika',
                    desc: 'Putra ketiga Bapak Sutarman & Ibu Suharyani',
                    media: 'instagram',
                    text: 'Doakan agar menjadi keluarga sakinah mawadah maromah'
                }
            ],
            Girl: [
                {
                    girlTitle: 'Ega',
                    desc: 'Putri ketiga Bapak Dana & Ibu Sugiati',
                    media: 'instagram',
                    text: 'Doakan agar menjadi keluarga sakinah mawadah maromah'
                }
            ],
            images: [
                Photo1,
                Photo2,
                Photo3,
                Photo4,
                Photo5,
                Photo6,
                Photo7
            ]
        }
    }
}

</script>