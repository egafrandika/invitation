import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueCountdown from '@chenfengyuan/vue-countdown';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {BiEnvelopeOpen, 
    GiDiamondRing, 
    BiCalendarDate, 
    IoTimeOutline, 
    PrInstagram, 
    RiDoubleQuotesL, 
    RiDoubleQuotesR,
    SiGooglemaps,
    MdSlowmotionvideoSharp,
    CoCalendar,
    CoWhatsapp,
    MdKeyboardarrowupRound,
    MdKeyboardarrowdownTwotone,
    BiYoutube} from "oh-vue-icons/icons";
import router from './router';

addIcons(
    BiEnvelopeOpen, 
    GiDiamondRing, 
    BiCalendarDate, 
    IoTimeOutline, 
    PrInstagram, 
    RiDoubleQuotesL, 
    RiDoubleQuotesR,
    SiGooglemaps,
    MdSlowmotionvideoSharp,
    CoCalendar,
    CoWhatsapp,
    MdKeyboardarrowupRound,
    MdKeyboardarrowdownTwotone,
    BiYoutube);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.component(VueCountdown.name, VueCountdown);
app.use(router);
app.mount("#app");

