import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase'
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
    BiYoutube,
    BiChatSquareText,
    BiCheck2,
    GiAlarmClock,
    IoPersonCircleOutline,
    MdKeyboardarrowdownRound,
    MdKeyboardarrowup,
    PrTimes} from "oh-vue-icons/icons";
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
    BiYoutube,
    BiChatSquareText,
    BiCheck2,
    GiAlarmClock,
    IoPersonCircleOutline,
    MdKeyboardarrowdownRound,
    MdKeyboardarrowup,
    PrTimes);

const app = createApp(App);
initializeApp(firebaseConfig);
getAnalytics();
app.component("v-icon", OhVueIcon);
app.component(VueCountdown.name, VueCountdown);
app.use(router);
app.mount("#app");

