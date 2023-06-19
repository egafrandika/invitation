<template>
    <div class="bg-gradient-to-b from-[#232020] to-[30%]">
        <div class="mx-auto w-full">
            <div v-for="img in images" class="relative -top-1 z-0">
                <img :src="img" class="rotate-180 w-full absolute">
            </div>
            <div class="pt-44 md:pt-64 pb-10">
                <h1 class="text-center font-four-wedding text-[25px]">Transfer</h1>
                <h1 class="text-center text-[35px] font-four-wedding ">Rejeki</h1>
            </div>
            <div class="flex space-x-2 overflow-auto snap-mandatory snap-x px-4">
                <div v-for="bank in banks" class="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
                    <img :src="bank.logo" class="w-full rounded-[20px] shadow-rose-950 grayscale hover:grayscale-0">
                    <div class="mx-auto">
                        <div class="pt-2 flex flex-col w-fit font-mono text-center mx-auto">
                            <h1 class="text-[20px]">{{ bank.bankname }}</h1>
                            <h1 class="text-[20px] pb-10">{{ bank.number }}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-10 md:pt-10 pb-10">
                <h1 class="text-center font-four-wedding text-[25px]">Kirim</h1>
                <h1 class="text-center text-[35px] font-four-wedding ">Kado</h1>
            </div>
            <div class="pt-2 pb-44">
                <div class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                    <img :src="Image1" autoplay muted class="object-cover h-full w-full rounded-[200px] brightness-[.3]">
                    <div v-for="gift in gifts" class="absolute w-full top-0 py-2 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                        <img :src="PohonWayang" class="w-[130px] mx-auto py-3">
                        <div class="flex font-sans tracking-wider justify-center border-[2px] border-x-0 items-center">
                            <h1 class="text-[27px] font-serif">{{ gift.title }}</h1>
                        </div>
                        <div class="py-2 text-[16px]">
                            <h1 class="font-mono">{{ gift.desa }}</h1>
                            <h1 class="font-mono">{{ gift.dusun }}</h1>
                            <h1 class="font-mono">{{ gift.kel }}</h1>
                            <h1 class="font-mono">{{ gift.kec }}</h1>
                            <h1 class="font-mono">{{ gift.kab }}</h1>
                            <h1 class="font-mono">{{ gift.prov }}</h1>
                        </div>
                        <div class="bg-[#442B1B] w-fit mx-auto rounded-lg px-4 h-fit shadow-lg cursor-pointer hover:bg-[#C38154] hover:text-black text-white"
                            @click="copyToClipboard('Sidobasuki, RT/RW 021/011, Desa Bumi Agung, Kec. Tegineneng , Pesawaran, Lampung')"
                        >
                            {{ gift.copyAddress }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Image1 from '../assets/image1.jpeg';
import PohonWayang from '../assets/kelir-petir.webp';
import BcaImage from '../assets/bank/BCA.svg'
import BriImage from '../assets/bank/BRI.svg'
import MandiriImage from '../assets/bank/MANDIRI.svg'
import BniImage from '../assets/bank/BNI.svg'
import FooterBanner1 from '../assets/footer-banner1.webp';
import FooterBanner2 from '../assets/footer-banner2.webp';
import FooterBanner3 from '../assets/footer-banner3.webp';


export default {
    name: 'Page5',

    data() {
        return {
            Image1,
            PohonWayang,
            images: [
                FooterBanner3,
                FooterBanner2,
                FooterBanner1,
            ],
            banks: [
                {logo: BcaImage, bankname: 'Rekening Bca', number: '081283982'},
                {logo: BriImage, bankname: 'Rekening Bri', number: '081283982'},
                {logo: MandiriImage, bankname: 'Rekening Mandiri', number: '081283982'},
                {logo: BniImage, bankname: 'Rekening Bni', number: '081283982'}
            ],
            gifts: [
                {
                    title: 'Alamat Kirim Kado',
                    desa: 'Desa: Sidobasuki',
                    dusun: 'Dusun: RT/RW 021/011',
                    kel: 'Kelurahan: Desa Bumi Agung',
                    kec: 'Kecamatan: Tegineneng',
                    kab: 'Kabupaten: Pesawaran',
                    prov: 'Provinsi: Lampung',
                    copyAddress: 'copy alamat',
                    dataAddress: 'Sidobasuki, RT/RW 021/011, Desa Bumi Agung, Kec. Tegineneng , Pesawaran, Lampung'
                }
            ],
        }
    },

    methods: {
        copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            window.alert('Berhasil Copy Alamat');
        }
    }
}

</script>