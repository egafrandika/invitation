<template>
    <div class="bg-gradient-to-b from-[#232020] to-[30%]">
        <div class="mx-auto w-full overflow-hidden">
            <div v-for="img in images" class="relative -top-1 z-0">
                <img :src="img" class="rotate-180 w-full absolute">
            </div>
            <div class="pt-[250px] pb-44">
                <div class="relative mx-auto border-[#C38154] border-[10px] max-w-[320px] h-[580px] rounded-[200px] bg-origin-content shadow-lg shadow-slate-800">
                    <img :src="Image1" autoplay muted class="object-cover h-full w-full rounded-[200px] brightness-[.3]">
                    <div v-for="gift in gifts" class="absolute w-full top-0 py-2 text-center font-second-wedding text-[40px] text-[#e4c8b5]">
                        <img :src="PohonWayang" class="w-[130px] mx-auto py-3">
                        <div class="flex font-sans tracking-wider justify-center border-[2px] border-x-0 items-center">
                            <h1 class="text-[23px] font-serif">{{ gift.title}}</h1>
                        </div>
                        <div class="py-8 px-2 text-[16px]">
                            <span class="font-base-wedding">{{ gift.dataAddress }}</span>
                        </div>
                    <div class="bg-[#442B1B] w-fit mx-auto rounded-lg px-4 h-fit shadow-lg cursor-pointer hover:bg-[#C38154] hover:text-black text-white" data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                        @click="openModal"
                    >
                        {{ gift.kirimHadiah }}
                    </div>
                        <div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative w-full max-w-md max-h-full">
                                <div class="relative bg-[#C38154] rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                        <svg @click="closeModal" data-modal-target="popup-modal" data-modal-hide="popup-modal" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="p-6 text-center">
                                        <h3 class="mb-5 text-[30px] font-four-wedding text-black dark:text-gray-400">Transfer Rejeki</h3>

                                        <div class="flex space-x-2 overflow-auto snap-mandatory snap-x px-4">
                                            <div v-for="bank in banks" class="flex-shrink-0 w-[300px] md:w-[400px] snap-center">
                                                <img :src="bank.logo" class="w-full rounded-[20px] shadow-rose-950 grayscale hover:grayscale-0">
                                                <div class="mx-auto">
                                                    <div class="pt-2 flex flex-col w-fit font-mono text-center mx-auto text-black">
                                                        <h1 class="text-[20px]">{{ bank.bankname }}</h1>
                                                        <h1 class="text-[20px] pb-10">{{ bank.number }}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 class="text-lg font-base-wedding text-gray-900 pb-4">Sidobasuki, RT/RW 021/011, Desa Bumi Agung, Kec. Tegineneng, Pesawaran, Lampung.</h1>
                                        <button 
                                            @click="copyToClipboard('Sidobasuki, RT/RW 021/011, Desa Bumi Agung, Kec. Tegineneng , Pesawaran, Lampung')"
                                            type="button" 
                                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-lg inline-flex items-center px-5 py-2.5 text-center mr-2"
                                        >
                                            Copy Alamat
                                        </button>
                                        <button @click="closeModal" data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Tutup</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="text-center py-10 mt-8 text-[20px] font-base-wedding">
                        <h1 v-motion-slide-visible-right class="font-four-wedding text-[28px]">Google Map</h1>
                        <p v-motion-slide-visible-left>Alamat Resepsi Pernikahan</p>
                    </div>
                <div v-motion-pop-visible class="border-[2px] border-red-900 w-[90%] h-[400px] mx-auto shadow-lg">
                    <iframe 
                        :src="googleSource"
                        style="border:0;"
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                        class="mx-auto w-full h-full">
                    </iframe>
                </div>
                <div v-motion-slide-visible-left class="text-center pt-20 font-base-wedding text-[20px] w-[300px] mx-auto">
                    <span>Konfirmasi Kehadiran Anda di Acara Pernikahan</span>
                    <h1 v-motion-slide-visible-right class="font-second-wedding text-[50px] py-2">Ega & Dika</h1>
                </div>
                <div v-motion-pop-visible class="w-full max-sm:max-w-xs max-w-xl mx-auto">
                    <form id="mySubmitionForm" class="bg-[#442B1B] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-300 text-sm font-bold mb-2" for="submitName">
                                Nama
                            </label>
                            <input 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="submitName" 
                                type="text" 
                                placeholder="Nama" 
                                pattern="[A-Za-z]+" title="Hanya hurus saja!"
                                required
                            >
                        </div>
                        <div class="mb-4">
                            <label 
                                class="block text-gray-300 text-sm font-bold mb-2" 
                                for="submitAmount"
                            >
                                Jumlah Tamu
                            </label>
                            <input 
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                id="submitAmount" type="number" 
                                placeholder="1 - 999" 
                                min="1" 
                                required
                            >
                            <p class="text-gray-300 text-xs italic">Isi dengan angka sesuai jumlah.</p>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-300 text-sm font-bold mb-2" for="submitNo">
                                Nomer Whatsapp
                            </label>
                            <input 
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                id="submitNo" 
                                type="number" 
                                placeholder="08*********" 
                                required
                            >
                        </div>
                        <div class="w-full">
                            <button 
                                @click="pushDataSubmition"
                                class="bg-[#C38154] hover:bg-[#886148] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                                Kirim Reservasi Kehadiran
                            </button>
                        </div>
                    </form>
                </div>
                <div class="text-center pt-10 font-base-wedding text-[20px] w-[300px] mx-auto">
                    <p v-motion-slide-visible-left>Ucapan Selamat & Doa untuk</p>
                    <h1 v-motion-slide-visible-right class="font-second-wedding text-[50px] py-2">Ega & Dika</h1>
                </div>
                <div v-motion-pop-visible class="w-full max-sm:max-w-xs max-w-xl mx-auto">
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
                        <div class="w-full mb-5">
                            <button 
                                :disabled="isBtnDisabled"
                                class="bg-[#4a2e1c] hover:bg-[#63412c] text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" 
                                type="button"
                                @click="retrieveFormData">
                                Kirim
                            </button>
                        </div>
                        <div class="overflow-y-auto h-80">
                            <div class="w-full text-start flex flex-row space-x-2" v-for="(rec, index) in record" :key="index">
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
                        </div>
                    </form>
                </div>
            </div>
            <div class="relative">
                <div class="z-50" v-motion 
                    :initial="{ x: 0 }" 
                    :enter="{x: 5,transition: {stiffness: 250,damping: 25,mass: 10,repeat: Infinity,repeatType: 'mirror'}}">
                    <img :src="Wayang1" alt="" class="absolute bottom-0 right-52 md:w-[210px] sm:right-40 sm:w-[150px] max-sm:right-20 tranform scale-x-[-1] max-sm:w-[120px] w-[200px]">
                    <img :src="Wayang2" alt="" class="absolute bottom-0 md:-right-20 right-0 md:w-[340px] sm:w-[250px] max-sm:-right-12 max-sm:w-[200px] w-[300px]">
                </div>
                <img 
                    v-motion 
                    :initial="{x: 0}"
                    :enter="{x: 5, transition: { stiffness: 250, damping: 30, mass: 10, repeat: Infinity, repeatType: 'mirror' }}"
                    :src="pohonWayang1" alt="" class="z-10 absolute bottom-0 left-[100px] md:w-[210px] sm:w-[160px] max-sm:w-[120px]">
                <img 
                    v-motion 
                    :initial="{ x: -5 }" :enter="{ x: 5, transition: { stiffness: 250, damping: 30, mass: 10, repeat: Infinity, repeatType: 'mirror' }}" 
                    :src="pohonWayang1" alt="" class="z-0 absolute bottom-0 left-0 sm:left-0 md:w-[260px] sm:w-[190px] max-sm:w-[140px]">
                <img :src="FooterBanner2" alt="" class="absolute bottom-0 w-full">
                <img :src="FooterBanner3" alt="" class="absolute bottom-0 w-full">
                <img :src="FooterBanner1" alt="" class="absolute bottom-0 w-full z-40">
            </div>
            <div v-if="this.isShowAlert" class="custom-alert">
                <div v-motion-pop class="flex flex-row justify-evenly items-center">
                    <p class="font-base-wedding">{{ alertMessage }}</p>
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
import Wayang1 from '../assets/wayang1.webp';
import Wayang2 from '../assets/wayang2.webp';
import FooterBanner1 from '../assets/footer-banner1.webp';
import FooterBanner2 from '../assets/footer-banner2.webp';
import FooterBanner3 from '../assets/footer-banner3.webp';

import { Modal } from 'flowbite'
import {getDatabase, ref, push, onValue, get} from 'firebase/database';

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
            ],
            alertMessage: "",
            isShowAlert: false,
        }
    },

    mounted() {
        this.getData();
    },

    methods: {
        openModal() {
            const $targetEl = document.getElementById('popup-modal');
            const options = {
                backdropClasses: ''
            }
            const modal = new Modal($targetEl, options)

            modal.show();
        },

        closeModal() {
            const $targetEl = document.getElementById('popup-modal');
            const modal = new Modal($targetEl)
            
            modal.hide();
        },
        
        copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            window.alert('Berhasil Copy Alamat');
        },

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
                console.log("Records before sorting:", this.record);
                this.record = records.map(record => {
                    const timestamp = new Date(record.timeCreated);
                    return {
                        ...record,
                        timeCreated: timestamp
                    };
                }).sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated))
                .map(record => {
                    return {
                        ...record,
                        timeCreated: record.timeCreated.toLocaleString('id-ID', options)
                    }
                })

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

            if(namaInput.value === '' || ucapanInput.value === '' || kehadiranInput.value === '') {
                this.alertMessage = 'Harap dilengkapi ya 🙏';
            } else {
                push(dataRef, data).then(() => {
                    console.log('data success save to firebase');

                    form.reset();
                }).catch((e) => {
                    console.log('error saving data to firebase',e);
                });
                this.alertMessage = 'Terimakasih atas ucapannya 😊';
            }
            this.isShowAlert = true;
            this.getData();
            setTimeout(() => {
                this.isShowAlert = false;
            }, 3000)
        },

        pushDataSubmition() {
            const submitForm = document.getElementById('mySubmitionForm');
            const submitNameInput = document.getElementById('submitName');
            const submitAmountInput = document.getElementById('submitAmount');
            const submitNoInput = document.getElementById('submitNo');

            const submitFormName = submitNameInput.value;
            const submitFormAmount = submitAmountInput.value;
            const submitFormNo = submitNoInput.value;

            const dataSubmition =  {
                formName: submitFormName,
                formAmount: submitFormAmount,
                formFromNo: submitFormNo
            }
            
            const dataSubmitionForm = getDatabase();
            const submitRef = ref(dataSubmitionForm, 'dataSubmition/submitionForm');

            if(submitNameInput.value === '' || submitAmountInput.value === '' || submitNoInput.value === '') {
                this.alertMessage = 'Harap dilengkapi ya 🙏';
            } else {
                    push(submitRef, dataSubmition).then(() => {
                    submitForm.reset();
                }).catch((e) => {
                    console.log('error to push firebase', e);
                });
                this.alertMessage = 'Terimakasih atas kehadirannya 😊';
            }
            this.isShowAlert = true;
            setTimeout(() => {
                this.isShowAlert = false;
            }, 3000)            
        }
    }
}

</script>

<style>
.custom-alert {
    width: 270px;
    background-color: #e3e9d2;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
</style>