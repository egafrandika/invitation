<template>
    <div class="bg-gradient-to-b from-neutral-300">
      <div class="md:max-w-[900px] h-auto mx-auto">
        <div class="relative">
          <section>
            <img :src="homeImage" alt="image_home" class="mx-auto object-cover h-screen w-full max-sm:fixed">
          </section>
          <div class="text-center w-full text-black absolute right-0 top-0 p-20 max-sm:p-12">
            <h1 class="text-[30px] font-base-wedding tracking-[10px] max-sm:tracking-[5px] max-sm:text-[17px]">
              The Wedding of
            </h1>
            <h1 
              class="font-second-wedding tracking-[10px] max-sm:tracking-[5px] max-sm:text-[50px] sm:text-[70px] md:text-[130px] max-md:text-[130px]"
            >
              Ega & Dika
            </h1>
          </div>
        </div>
        <div class="absolute w-full text-center right-0 bottom-0 p-20 max-sm:p-5 bg-gradient-to-t from-0% from-neutral-950 to-100%">
          <h1 class="font-base-wedding text-lg max-sm:text-[20px] text-white">Kepada Bapak/Ibu/Saudara/i</h1>
          <h1 class="font-base-wedding text-lg pt-4 pb-6 max-sm:pb-4 max-sm:pt-2 max-sm:text-[18px] text-white">{{ name }}</h1>
          <router-link to="/home-page">
              <div class="p-4 max-sm:p-1.5 flex flex-row justify-center space-x-4 border-4 max-sm:border-2 border-slate-100 rounded-lg items-center max-w-[250px] max-sm:max-w-[180px] mx-auto cursor-pointer">
                <v-icon name="bi-envelope-open" animation="ring" scale="1.5" fill="white"/>
                <h1 class="font-serif max-sm:text-[12px] text-white">BUKA UNDANGAN</h1>
              </div>
            </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import homeImage from '../assets/photo-wedding/edit/pertama.jpg';  
  export default{
    name: 'MainPage',
  
    data() {
      return {
        name: '',
        homeImage,
        isMusicPlayed: false
      }
    },

    mounted() {
      this.name = this.$route.params.name;
    },

    methods: {
      goToHomePage() {
        this.$router.push('/home-page');
      },
    }
  }
  
  </script>