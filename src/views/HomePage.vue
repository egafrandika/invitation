<template>
    <div class="wrapper-content bg-[#e7d5a5] bg-gradient-to-b from-black to-10% md:max-w-[900px] mx-auto">
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
    </div>
</template>

<script>
import Page1 from '../components/page1.vue';
import Page2 from '../components/page2.vue';
import Page3 from '../components/page3.vue';
import Page4 from '../components/page4.vue';

export default{
    name: "HomePage",
    components: {
    Page1,
    Page2,
    Page3,
    Page4
},


}
</script>