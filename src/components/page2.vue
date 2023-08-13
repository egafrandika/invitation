<template>
    <div class="bg-[#0d0c0c]">
        <div v-motion-pop-visible v-for="text in texts" class="w-[550px] max-sm:w-[350px] text-center mx-auto pb-5">
            <h1 class="text-[#ddcaca] text-[50px] max-sm:text-[30px]">{{text.bismilah}}</h1>
            <h1 class="text-[#ddcaca] text-center pt-2">{{ text.babel }}</h1>
            <span class="text-[#ddcaca] text-center w-[200px] max-sm:text-[10px] leading-3">{{ text.description }}</span>
        </div>
        <h1 v-motion-slide-visible-bottom class="text-[#ddcaca] font-serif text-center text-[40px] pb-9 pt-2">The Bride</h1>
        <div class="flex flex-row justify-center pl-6">
            <div v-motion-slide-visible-left class="border-[#C38154] border-[10px] max-w-[200px] h-[330px] max-sm:w-[340px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image1" alt="image1" class="object-cover h-full w-full rounded-[200px]">
            </div>
            <div class="flex flex-col justify-items-end text-[#ddcaca] pl-6 pr-6" v-for="item in Girl">
                <h1 v-motion-slide-visible-right class="font-second-wedding text-[60px] text-right">Ega</h1>
                <h1 v-motion-slide-visible-right class="text-[10px] text-right mb-2">{{ item.girlTitle }}</h1>
                <div v-motion-slide-visible-right class="flex flex-col text-[15px] font-base-wedding text-right max-w-xs">
                    <span class="pb-2">{{ item.desc }}</span>
                    <div v-for="url in instagramUrl" @click="goGirlInstagram(url.girlInstagram)" class="flex items-center bg-[#442B1B] w-fit px-4 py-1 rounded-md self-end">
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
        <div class="pt-9 pb-9 flex space-x-2 overflow-auto snap-mandatory snap-x px-6">
            <div v-for="img in GirlImages" class="flex-shrink-0 snap-center">
                <img :src="img" class="w-[330px] h-[200px] rounded-md object-cover"/>
            </div>
        </div>
        <h1 v-motion-slide-visible-bottom class="text-[#ddcaca] font-serif text-center text-[40px] pt-9 pb-9">The Groom</h1>
        <div class="flex flex-row-reverse justify-center pr-6">
            <div v-motion-slide-visible-right class="border-[#C38154] border-[10px] max-w-[200px] h-[330px] max-sm:w-[340px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                <img :src="Image4" alt="image1" class="object-cover h-full w-full rounded-[200px]">
            </div>
            <div class="flex flex-col justify-items-end text-[#ddcaca] px-6" v-for="item in Man">
                <h1 v-motion-slide-visible-right class="text-start font-second-wedding text-[60px]">Dika</h1>
                <h1 v-motion-slide-visible-left class="text-start text-[10px] mb-2">{{ item.manTitle }}</h1>
                <div v-motion-slide-visible-left class="flex flex-col text-[15px] font-base-wedding max-w-xs">
                    <span class="pb-2">{{ item.desc }}</span>
                    <div v-for="url in instagramUrl" @click="goManInstagram(url.manInstagram)" class="flex items-center justify-start bg-[#442B1B] w-fit px-4 py-1 rounded-md">
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
        <div class="pt-9 pb-[50px] flex space-x-2 overflow-x-auto snap-mandatory snap-x px-6">
            <div v-for="img in ManImages" class="flex-shrink-0 snap-center">
                <img :src="img" class="w-[330px] h-[200px] rounded-md object-cover"/>
            </div>
        </div>
    </div>
</template>

<script>
import Image1 from '../assets/photo-wedding/edit/girl-page2.jpg';
import Photo1 from '../assets/photo-wedding/edit/girl1-page2.jpg';
import Photo2 from '../assets/photo-wedding/edit/girl2-page2.jpg';
import Photo3 from '../assets/photo-wedding/edit/girl3-page2.jpg';
import Image4 from '../assets/photo-wedding/edit/man-page2.jpg';
import Photo5 from '../assets/photo-wedding/edit/man1-page2.jpg';
import Photo6 from '../assets/photo-wedding/edit/man2-page2.jpg';
import Photo7 from '../assets/photo-wedding/edit/man3-page2.jpg';

export default {
    name: 'Page2',

    data() {
        return {
            Image1,
            Image4,
            texts: [
                {
                    bismilah: 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ'
                },
                {
                    babel: 'وَ مِنۡ اٰیٰتِہٖۤ اَنۡ خَلَقَ لَکُمۡ مِّنۡ اَنۡفُسِکُمۡ اَزۡوَاجًا لِّتَسۡکُنُوۡۤا اِلَیۡہَا وَ جَعَلَ بَیۡنَکُمۡ مَّوَدَّۃً وَّ رَحۡمَۃً ؕ اِنَّ فِیۡ ذٰلِکَ لَاٰیٰتٍ لِّقَوۡمٍ یَّتَفَکَّرُوۡنَ'
                },
                {
                    description: '❝ Dan diantara tanda - tanda kekuasaan-Nya ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian itu menjadi tanda - tanda kebesaran-Nya bagi orang - orang yang berfikir.❞'
                }

            ],
            Man: [
                {
                    manTitle: 'Ega Frandika B.Sc.IT',
                    desc: 'Putra ketiga Bpk Sutarman & Ibu Suharyani',
                    media: 'instagram',
                    text: 'Doakan agar menjadi keluarga sakinah mawadah maromah'
                }
            ],
            Girl: [
                {
                    girlTitle: 'Tri Ega Septiana S.Kep., Ners',
                    desc: 'Putri ketiga Bpk Sukadana & Ibu Sugiati',
                    media: 'instagram',
                    text: 'Doakan agar menjadi keluarga sakinah mawadah maromah'
                }
            ],
            GirlImages: [
                Photo1,
                Photo2,
                Photo3,
            ],
            ManImages: [
                Photo5,
                Photo6,
                Photo7
            ],
            instagramUrl: [
                {
                    manInstagram: 'https://www.instagram.com/ega_frandika/',
                    girlInstagram: 'https://www.instagram.com/triegas/'
                }
            ]
        }
    },

    methods: {
        goManInstagram(link) { 
            window.location = link
        },

        goGirlInstagram(link) { 
            window.location = link
        },
    }
}

</script>