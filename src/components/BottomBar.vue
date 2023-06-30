<template>
    <div class="bottom-bar-container">
        <div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/home_icon.png" alt="home"></div>
            <div><router-link to="/">홈</router-link></div>
        </div>
        <div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/service_icon.png" alt="home"></div>
            <div><router-link to="/service">서비스</router-link></div>
        </div>
        <div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/list_icon.png" alt="home"></div>
            <div><router-link to="/list">리스트</router-link></div>
        </div>
        <div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/knowhow_icon.png" alt="home"></div>
            <div><router-link to="/knowhow">리서치노하우</router-link></div>
        </div>
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
    font-size: 15px;
    margin-top: 10px;
}

.bottom-bar-container a.router-link-exact-active {
    color: #000000;
}

.bar-img{
    width: 20%;
}
.bar-item-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-right: solid 0.3px gray;
}

.bottom-bar-container {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    height: 50px;
    justify-content: space-around;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgb(237, 237, 237);
}</style>