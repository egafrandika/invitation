<template>
    <div class="z-[999] fixed bottom-6 right-6 max-sm:bottom-2 max-sm:right-2">
            <transition name="fade">
                <div v-show="showButtons">
                    <div class="py-1">
                        <div class="text-white rounded-[50%] bg-[#bc2a8d] w-[60px] h-[60px] text-center cursor-pointer pt-[11px] hover:shadow-shadow-one">
                                <v-icon name="pr-instagram" animation="none" scale="2.0" fill="white"/>
                            </div>
                        </div>
                        <div class="py-1">
                            <div class="text-white rounded-[50%] bg-[#c4302b] w-[60px] h-[60px] text-center cursor-pointer pt-[11px] hover:shadow-shadow-one">
                                <v-icon name="bi-youtube" animation="none" scale="2.0" fill="white"/>
                            </div>
                        </div>
                        <div class="py-1">
                            <div class="text-white rounded-[50%] bg-[#25d366] w-[60px] h-[60px] text-center cursor-pointer pt-[11px] hover:shadow-shadow-one">
                                <v-icon name="co-whatsapp" animation="none" scale="2.0" fill="white"/>
                            </div>
                        </div>
                    </div>
            </transition>
            <div class="py-1" @click="toggleButtons">
                <div class="text-white rounded-[50%] bg-[#442B1B] w-[60px] h-[60px] flex items-center justify-center cursor-pointer hover:shadow-shadow-one">
                    <v-icon v-if="showButtons" name="md-keyboardarrowdown-twotone" animation="float" scale="2.0" fill="white"/>
                    <v-icon v-else name="md-keyboardarrowup-round" animation="float" scale="2.0" fill="white"/>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'FloatingBtn',

    data() {
        return {
            showButtons: false
        }
    },

    methods: {
        toggleButtons() {
            this.showButtons = !this.showButtons
        }
    }
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>