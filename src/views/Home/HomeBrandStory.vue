<template>
    <div class="home-story-container">
        <HomeNavBar />
        
    </div>
</template>

<script>
import HomeNavBar from '@/components/Home/HomeNavBar.vue'


export default {
    name: 'HomeStory',
    components: {
        HomeNavBar,
        
    }
}
</script>

<style>
.home-story-container {
    display: flex;
    flex-direction: column;
}
</style>