<template>
    <div class="home-contact-container">
        <HomeNavBar />
        <HomeQna />
        <HomeContactContact />
    </div>
</template>

<script>
import HomeNavBar from '@/components/Home/HomeNavBar.vue'
import HomeQna from '@/components/Home/HomeContactQna.vue'
import HomeContactContact from '@/components/Home/HomeContactContact.vue'
export default {
    name: 'HomeContact',
    components: {
        HomeNavBar,
        HomeQna,
        HomeContactContact
    },
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>

<style>
.home-contact-container {
    display: flex;
    flex-direction: column;
}




</style>