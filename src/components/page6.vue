<template>
    <div class="bg-gradient-to-b from-[#232020] to-[30%]">
        <div class="mx-auto w-full relative overflow-hidden">
            <div v-for="img in images" class="relative -top-1 z-0">
                <img :src="img" class="absolute rotate-180 w-full">
            </div>
            <div class="py-40 w-80 text-center mx-auto">
                <h1 v-motion-slide-visible-bottom class="font-four-wedding py-10 text-lg">Besar harapan kami Bapak/Ibu dapat menghadiri acara pernikahan kami</h1>
                <img v-motion-pop-visible :src="Image1" alt="image.page6" class="rounded-full border-[10px] border-[#442B1B]">
                <h1 v-motion-slide-visible-right class="pt-10 font-base-wedding">Hormat Kami</h1>
                <h1 v-motion-slide-visible-left class="py-2 text-[40px] font-four-wedding">Dika & Ega</h1>
                <p v-motion-slide-visible-right class="py-10 font-base-wedding">The next Ramashinta</p>
                <img v-motion
                    :initial="{x: 5, y: 5}"
                    :enter="{x: -5, y: 5, transition: {stiffness: 250, damping: 30, mass: 10, repeat: Infinity, repeatType: 'mirror'}}"
                    :src="imgPohonWayang" class="mx-auto w-[200px]" 
                />
                <div class="pt-40 max-sm:pt-8 font-base-wedding">
                    <h1 v-motion-slide-visible-left class="w-29 pb-3 mx-auto">Undangan ini dibuat oleh:</h1>
                    <p v-motion-slide-visible-right class="font-four-wedding">Ega Frandika & Tri Ega Septiana</p>
                </div>
                <div v-motion-pop-visible class="bg-[#442B1B] w-fit p-2 rounded-full mx-auto mt-10 mb-4 cursor-pointer" @click="onTop">
                    <v-icon name="md-keyboardarrowup" animation="float" scale="1.5" fill="white"/>
                </div>
                <p v-motion-slide-visible-bottom class="font-base-wedding">klik untuk keatas</p>
            </div>
            <div>
                <img 
                    v-motion
                    :initial="{x: 0}"
                    :enter="{x: 10, transition: { stiffness: 250, damping: 30, mass: 10, repeat: Infinity, repeatType: 'mirror' }}"
                    :src="Wayang1" alt="" class="absolute w-[900px] md:w-[300px]  lg:w-[300px] xl:w-[300px] sm:w-[190px] max-sm:w-[120px] bottom-0 left-0">
                <img
                    v-motion
                    :initial="{x: 10}"
                    :enter="{x: 0, transition: { stiffness: 250, damping: 30, mass: 10, repeat: Infinity, repeatType: 'mirror' }}"
                    :src="Wayang2" alt="" class="absolute w-[400px] md:w-[420px] lg:w-[400px] xl:w-[430px] sm:w-[250px] max-sm:w-[180px] max-sm:-right-10 bottom-0 right-0">
            </div>
            <div v-for="img in images" class="absolute w-full -bottom-1 z-0">
                <img :src="img" class="w-full">
            </div>
        </div>
    </div>
</template>

<script>
    import Image1 from '../assets/home-image.jpeg';
    import Wayang1 from '../assets/wayang1.webp';
    import Wayang2 from '../assets/wayang2.webp';
    import FooterBanner1 from '../assets/footer-banner1.webp';
    import FooterBanner2 from '../assets/footer-banner2.webp';
    import FooterBanner3 from '../assets/footer-banner3.webp';
    import imgPohonWayang from '../assets/imgPohonWayang.png';

    export default {

        name: 'page6',

        data() {
            return {
                Image1,
                Wayang1,
                Wayang2,
                imgPohonWayang,
                images: [
                    FooterBanner3,
                    FooterBanner2,
                    FooterBanner1,
                ],
            }
        },

        methods: {
            onTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>