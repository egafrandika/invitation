<template>
    <div class="bg-gradient-to-b from-[#232020] to-[30%]">
        <div class="mx-auto w-full overflow-hidden">
            <div v-for="img in images" class="relative -top-1 z-0">
                <img :src="img" class="rotate-180 w-full absolute">
            </div>
            <!-- <div class="pt-44 md:pt-64 pb-10">
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
            </div> -->
            <!-- <div class="pt-10 md:pt-10 pb-10">
                <h1 class="text-center font-four-wedding text-[25px]">Kirim</h1>
                <h1 class="text-center text-[35px] font-four-wedding ">Kado</h1>
            </div> -->
            <div class="pt-[250px] pb-44">
                <div class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                    <img :src="Image1" autoplay muted class="object-cover h-full w-full rounded-[200px] brightness-[.3]">
                    <div v-for="gift in gifts" class="absolute w-full top-0 py-2 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                        <img :src="PohonWayang" class="w-[130px] mx-auto py-3">
                        <div class="flex font-sans tracking-wider justify-center border-[2px] border-x-0 items-center">
                            <h1 class="text-[23px] font-serif">{{ gift.title }}</h1>
                        </div>
                        <div class="py-8 px-2 text-[16px]">
                            <span class="font-base-wedding">{{ gift.dataAddress }}</span>
                        </div>
                        <div class="bg-[#442B1B] w-fit mx-auto rounded-lg px-4 h-fit shadow-lg cursor-pointer hover:bg-[#C38154] hover:text-black text-white"
                        >
                        {{ gift.kirimHadiah }}
                    </div>
                        <!-- <div class="bg-[#442B1B] w-fit mx-auto rounded-lg px-4 h-fit shadow-lg cursor-pointer hover:bg-[#C38154] hover:text-black text-white"
                            @click="copyToClipboard('Sidobasuki, RT/RW 021/011, Desa Bumi Agung, Kec. Tegineneng , Pesawaran, Lampung')"
                        >
                            {{ gift.copyAddress }}
                        </div> -->
                    </div>
                </div>
                    <div class="text-center py-10 text-[20px] font-base-wedding">
                        <h1>Google Map</h1>
                    </div>
                <div class="border-[2px] border-red-900 w-[90%] h-[400px] mx-auto shadow-lg">
                    <iframe 
                        :src="googleSource"
                        style="border:0;"
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                        class="mx-auto w-full h-full">
                    </iframe>
                </div>
                <div class="text-center pt-20 font-base-wedding text-[20px] w-[300px] mx-auto">
                    <span>Konfirmasi Kehadiran Anda di Acara Pernikahan</span>
                    <h1 class="font-second-wedding text-[50px] py-2">Ega & Dika</h1>
                </div>
                <div class="w-full max-sm:max-w-xs max-w-xl mx-auto">
                    <form class="bg-[#442B1B] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-300 text-sm font-bold mb-2" for="nama">
                                Nama
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-300 text-sm font-bold mb-2" for="password">
                                Jumlah Tamu
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="tamu" type="tamu" placeholder="1 - 999">
                            <p class="text-gray-300 text-xs italic">Isi dengan angka sesuai jumlah.</p>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-300 text-sm font-bold mb-2" for="password">
                                Nomer Whatsapp
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="tamu" type="tamu" placeholder="08*********">
                        </div>
                        <div class="w-full">
                            <button class="bg-[#C38154] hover:bg-[#886148] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                                Kirim Reservasi Kehadiran
                            </button>
                        </div>
                    </form>
                </div>
                <div class="text-center pt-10 font-base-wedding text-[20px] w-[300px] mx-auto">
                    <span>Ucapan Selamat & Doa untuk</span>
                    <h1 class="font-second-wedding text-[50px] py-2">Ega & Dika</h1>
                </div>
                <div class="w-full max-sm:max-w-xs max-w-xl mx-auto">
                    <form class="bg-[#b57d5b] shadow-md rounded px-8 pt-6 pb-8 md:mb-48 sm:mb-40 max-sm:mb-20" id="myForm">
                        <div class="flex py-2 items-center space-x-1">
                            <v-icon name="bi-chat-square-text" animation="ring" scale="1.5" fill="white"/>
                            <div class="flex space-x-1">
                                <h1 class="text-slate-300">{{this.record && this.record.length}}</h1>
                                <span> Ucapan</span>
                            </div>
                        </div>
                        <hr class="py-2">
                        <div class="mb-4">
                            <label 
                                class="block text-gray-300 text-sm font-bold mb-2" 
                                for="nama"
                            >
                                Nama
                            </label>
                            <input 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="nama"
                                type="text" 
                                placeholder="Nama"
                            >
                        </div>
                        <div class="mb-4">
                            <label 
                                class="block text-gray-300 text-sm font-bold mb-2" 
                                for="ucapan">
                                Ucapan
                            </label>
                            <textarea 
                                class="rounded-[4px] w-full" 
                                id="ucapan"
                                placeholder="Kata - Kata Ucapan..." 
                                rows="4"></textarea>
                        </div>
                        <div class="mb-6">
                            <label 
                                class="block text-gray-300 text-sm font-bold mb-2" 
                                for="kehadiran"
                            >
                                Konfirmasi Kehadiran
                            </label>
                            <div>
                                <input id="draft" class="peer/draft" type="radio" name="status" value="hadir" checked/>
                                <label for="draft" class="peer-checked/draft:text-slate-300 px-2 font-base-wedding">Hadir</label>
                                <input id="published" class="peer/published" type="radio" name="status" value="berhalangan"/>
                                <label for="published" class="peer-checked/published:text-slate-300 px-2 font-base-wedding">Berhalangan</label>

                                <div class="hidden peer-checked/draft:block font-base-wedding pt-4 text-slate-300">Saya Datang di Acara Pernikahan.</div>
                                <div class="hidden peer-checked/published:block font-base-wedding pt-4 text-slate-300">Saya Berhalangan untuk Hadir.</div>
                            </div>
                        </div>
                        <div class="w-full">
                            <button 
                                class="bg-[#4a2e1c] hover:bg-[#63412c] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" 
                                type="button"
                                @click="retrieveFormData">
                                Kirim
                            </button>
                        </div>
                        <div class="w-full text-start pt-8 flex flex-row space-x-2" v-for="(rec, index) in record" :key="index">
                            <div class="bg-[#4a2e1c] p-1 mt-1 max-sm:p-1 rounded-full h-fit w-fit">
                                <img :src="profile" alt="" class="rounded-full max-w-[20px]">
                            </div>
                            <div>
                                <div class="flex space-x-1 items-center">
                                    <h1 class="font-base-wedding text-[20px]">{{ rec.nama }}</h1>
                                    <template v-if="rec.kehadiran === 'hadir'">
                                        <div class="flex bg-[#98c76b] items-center px-[3px] rounded space-x-[1px]">
                                            <v-icon name="bi-check2" scale="0.8" fill="black"/>
                                            <h1 class="font-base-wedding text-[12px] text-black-300">{{ rec.kehadiran}}</h1>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="flex bg-red-900 items-center px-[3px] rounded space-x-[1px]">
                                            <v-icon name="pr-times" scale="0.8" fill="white"/>
                                            <h1 class="font-base-wedding text-[12px] text-slate-300">{{ rec.kehadiran}}</h1>
                                        </div>
                                    </template>    
                                </div>
                                <div class="flex items-center space-x-1">
                                    <v-icon name="gi-alarm-clock" scale="0.8" fill="white"/>
                                    <h1 class="text-[10px] text-slate-200 py-1">{{ rec.timeCreated }} WIB</h1>
                                </div>
                                <span class="font-base-wedding max-sm:text-[12px]">{{ rec.ucapan }}</span>
                            </div>
                        </div>
                        <div class="text-center cursor-pointer">
                            <v-icon name="md-keyboardarrowdown-round" scale="2.0" animation="float" fill="black"/>
                        </div>
                    </form>
                </div>
            </div>
            <div class="relative">
                <img :src="Wayang1" alt="" class="absolute bottom-0 right-52 md:w-[210px] sm:right-40 sm:w-[150px] max-sm:right-20 transform scale-x-[-1] max-sm:w-[120px] w-[200px] z-10">
                <img :src="Wayang2" alt="" class="absolute bottom-0 md:-right-20 right-0 md:w-[340px] sm:w-[250px] max-sm:-right-12 max-sm:w-[200px] w-[300px] z-10">
                <img :src="pohonWayang1" alt="" class="z-10 absolute bottom-0 left-[100px] md:w-[210px] sm:w-[160px] max-sm:w-[120px]">
                <img :src="pohonWayang1" alt="" class="z-0 absolute bottom-0 left-0 sm:left-0 md:w-[260px] sm:w-[190px] max-sm:w-[140px]">
                <img :src="FooterBanner2" alt="" class="absolute bottom-0 w-full">
                <img :src="FooterBanner3" alt="" class="absolute bottom-0 w-full">
                <img :src="FooterBanner1" alt="" class="absolute bottom-0 w-full z-40">
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
import Wayang1 from '../assets/wayang1.webp';
import Wayang2 from '../assets/wayang2.webp';
import FooterBanner1 from '../assets/footer-banner1.webp';
import FooterBanner2 from '../assets/footer-banner2.webp';
import FooterBanner3 from '../assets/footer-banner3.webp';

import {getDatabase, ref, push, onValue} from 'firebase/database';

export default {
    name: 'Page5',

    data() {
        return {
            record: null,
            Image1,
            PohonWayang,
            Wayang1,
            Wayang2,
            FooterBanner3,
            FooterBanner2,
            FooterBanner1,
            googleSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d496.6930356973872!2d105.1847376!3d-5.1767408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40b73a3809a7d9%3A0xf5f4af50f81bbcaf!2sPaud%20Annisa!5e0!3m2!1sen!2sid!4v1688611002832!5m2!1sen!2si',
            pohonWayang1: 'https://www.kunika.id/wp-content/uploads/2023/02/Relik.png',
            profile: 'https://www.kunika.id/wp-content/uploads/2023/01/Your-paragraph-text.jpg',
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
                    title: 'Alamat Kirim Hadiah',
                    copyAddress: 'copy alamat',
                    kirimHadiah: 'Kirim Hadiah',
                    dataAddress: 'Sidobasuki, RT/RW 021/011, Desa Bumi Agung, Kec. Tegineneng , Pesawaran, Lampung.'
                }
            ]
        }
    },

    mounted() {
        this.getData();
    },

    methods: {
        // copyToClipboard(text) {
        //     const el = document.createElement('textarea');
        //     el.value = text;
        //     document.body.appendChild(el);
        //     el.select();
        //     document.execCommand('copy');
        //     document.body.removeChild(el);
        //     window.alert('Berhasil Copy Alamat');
        // }

        getData() {
            const database = getDatabase();
            const dataRef = ref(database, 'dataInvitation/invitationForm');
            
            onValue(dataRef, (snapshot) => {
                const data = snapshot.val();
                const records = Object.values(data).slice(0, -4)

                const options = {
                    timeZone: 'Asia/Jakarta',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                };

                this.record = records.map(record => {
                    const timestamp = new Date(record.timeCreated);
                    const formattedTimestamp = timestamp.toLocaleString('id-ID', options);
                    return {
                        ...record,
                        timeCreated: formattedTimestamp
                    };
                });
            }, {
                onlyOnce: true
            });
        },

        retrieveFormData() {
            const form = document.getElementById('myForm');
            const namaInput = document.getElementById('nama');
            const ucapanInput = document.getElementById('ucapan');
            const kehadiranInput = document.querySelector('input[name="status"]:checked');

            const nama = namaInput.value;
            const ucapan = ucapanInput.value;
            const kehadiran = kehadiranInput.value === 'hadir' ? 'hadir' :  'berhalangan';

            const data = {
                nama: nama,
                ucapan: ucapan,
                kehadiran: kehadiran,
                timeCreated: new Date().getTime()
            }

            const database = getDatabase();
            const dataRef = ref(database, 'dataInvitation/invitationForm');

            push(dataRef, data).then(() => {
                console.log('data success save to firebase');

                form.reset();
            }).catch((e) => {
                console.log('error saving data to firebase',e);
            });

            this.getData();
        }
    }
}

</script>