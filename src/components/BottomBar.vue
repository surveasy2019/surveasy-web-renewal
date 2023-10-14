<template>
    <div class="bottom-bar-container">
        <router-link to="/"><div class="bar-item-container">
            <div class="ii"><img class="bar-img" src="@/assets/barIcon/home_icon.png" alt="home"></div>
            <div>홈</div>
        </div></router-link>
        <router-link to="/service"><div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/service_icon.png" alt="home"></div>
            <div>서비스</div>
        </div></router-link>
        <router-link to="/list"><div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/list_icon.png" alt="home"></div>
            <div>리스트</div>
        </div></router-link>
        <router-link to="/knowhow"><div class="bar-item-container">
            <div><img class="bar-img" src="@/assets/barIcon/knowhow_icon.png" alt="home"></div>
            <div>리서치노하우</div>
        </div></router-link>
    </div>
</template>


<script>
export default {
    name: 'BottomBar',
    data(){
        return{
            isActive : false
        }
    }
    
}
</script>


<style>

.bottom-bar-container a {
    font-weight: bold;
    color: #a4a4a4;
    text-decoration: none;
    font-size: 15px;
    margin-top: 0;
}

.bottom-bar-container a.router-link-exact-active {
    color: #0AAC00;
}

.bar-img{
    width: 20%;
    opacity: 0.3;
}
.bar-item-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-right: solid 1px gray;
}


.bottom-bar-container {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    height: 55px;
    background-color: white;
    justify-content: space-around;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

</style>