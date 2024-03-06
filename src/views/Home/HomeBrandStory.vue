<template>
    <div class="home-story-container">
        <HomeNavBar />
        <HomeBrandStory />
        
    </div>
</template>

<script>
import HomeNavBar from '@/components/Home/HomeNavBar.vue'
import HomeBrandStory from '@/components/Home/HomeStoryContent.vue'

export default {
    name: 'HomeStory',
    components: {
        HomeNavBar,
        HomeBrandStory
        
    },
    mounted() {
        window.scrollTo(0,0)
    }
}
</script>

<style>
.home-story-container {
    display: flex;
    flex-direction: column;
}
</style>