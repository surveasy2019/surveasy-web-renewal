<template>
    <div class="home-contact-container">
        <HomeNavBar />
        

    </div>
</template>

<script>
import HomeNavBar from '@/components/Home/HomeNavBar.vue'

export default {
    name: 'HomeContact',
    components: {
        HomeNavBar,
        

    }
}
</script>

<style>
.home-contact-container {
    display: flex;
    flex-direction: column;
}
</style>