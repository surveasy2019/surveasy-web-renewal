<template>
  <div class="link-modal" v-if="showLinkIframe">
    <div class="link-modal-contentsbox">
      <div class="link-modal-title">설문 링크 확인하기</div>
      <button class="modal-close-button" @click="$emit('closeIframe')"><i class="fas fa-times"></i></button>
      <div class="link-modal-container">
        <iframe :src='iframe()' width="650" height="335"></iframe> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'link-modal',
  props: { 
    showLinkIframe: {
      type: Boolean,
      require: true,
      default: false 
    }
  },

  data() {
    return {
    }
  },

  methods: {
    iframe() {
      var iframeLink = this.$store.state.checklink
      return iframeLink
    }
  }

}
</script>

<style>
.link-modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.419);
  display: table;
}
.link-modal-contentsbox {
  position: relative;
  width: 700px;
  height: 420px;
  margin: 13% auto;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 5px 5px #0000001c;
}
.link-modal-title {
  display: inline-block;
  margin: 10px 0 20px 40px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: rgb(123, 123, 123);
}
.modal-close-button {
  margin-right: -15px;
}
</style>