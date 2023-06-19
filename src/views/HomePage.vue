<template>
    <div class="wrapper-content bg-[#e7d5a5] bg-gradient-to-b from-slate-950 to-[3%] md:max-w-[900px] mx-auto">
        <FloatingButton/>
        <div class="wrapper-component-page">
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
        </div>
    </div>
</template>

<script>
import Page1 from '../components/page1.vue';
import Page2 from '../components/page2.vue';
import Page3 from '../components/page3.vue';
import Page4 from '../components/page4.vue';
import Page5 from '../components/page5.vue';
import FloatingButton from '../components/floating-btn.vue'
import backgroundMusic from '../assets/lagujawa.mp3';

export default{
    name: "HomePage",

    components: {
        Page1,
        Page2,
        Page3,
        Page4,
        Page5,
        FloatingButton
    },

    data() {
        return {
            isMusicPlayed: false,
            audio: null
        };
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
        vm.playMusic();
        });
    },

    beforeRouteLeave(to, from, next) {
        if (from.name === 'homepage') {
            this.stopMusic();
        }
            next();
    },

    methods: {
        playMusic() {
            if (!this.isMusicPlayed) {
                this.audio = new Audio();
                this.audio.src = backgroundMusic;
                this.audio.loop = true;

                // Play the music
                this.audio.play().catch((error) => {
                // Handle autoplay error
                    console.error('Autoplay failed:', error);
                });

                this.isMusicPlayed = true;
            }
        },

        stopMusic() {
            if (this.isMusicPlayed && this.audio) {
                this.audio.pause();
                this.audio = null;
                this.isMusicPlayed = false;
            }
        }
    }
}
</script>
