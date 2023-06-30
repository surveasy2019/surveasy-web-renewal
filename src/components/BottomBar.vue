<template>
    <div class="bottom-bar-container">
        <router-link to="/">홈</router-link>
        <router-link to="/service">서비스</router-link>
        <router-link to="/list">리스트</router-link>
        <router-link to="/knowhow">리서치노하우</router-link>
    </div>
</template>


<script>
export default {
    name: 'BottomBar'
}
</script>


<style>

.bottom-bar-container a {
    font-weight: bold;
    color: #a4a4a4;
    text-decoration: none;
    margin: 10px;
}

.bottom-bar-container a.router-link-exact-active {
    color: #000000;
}

.bottom-bar-container {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-around;
}</style>