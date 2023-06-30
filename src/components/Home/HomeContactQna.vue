<template>
    <div class="home-qna-container">
        <div class="contact-menu-container">
            <nav>
                <div>설문응답 서비스</div>
                <div>회원 정보</div>
                <div>결제 / 환불</div>
            </nav>
        </div>
        <div class="contact-content">
            QNA 답변
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.home-qna-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
}

.contact-menu-container nav{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.contact-content{
    border: solid 1px black;
    width: 70%;
    margin: auto;
}
</style>