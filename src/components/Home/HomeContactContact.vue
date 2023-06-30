<template>
    <div class="home-contact-container">
        <div class="home-title">
            도움이 필요하신가요?
        </div>
        <div class="home-contact-item">
            <div class="contact-item">
                카카오 플러스 친구
            </div>
            <div class="contact-item">
                이메일 문의
            </div>

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.home-contact-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    margin-top: 5px;
    margin-bottom: 30px;
}

.home-contact-item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.home-title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin-left: 15px;
}

.contact-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px black;
    width: 40%;
    height: 50px;
}</style>