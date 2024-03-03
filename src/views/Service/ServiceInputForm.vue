<template>
  <div>
    <OptionInfoVue />
    <SurveyInfoVue />
    <PaymentOption />
    <PaymentMethodVue />
    <PaymentInfo />

  </div>
</template>

<script>
import OptionInfoVue from '@/components/Service/ServiceInputForm/OptionInfo.vue'
import PaymentMethodVue from '@/components/Service/ServiceInputForm/PaymentMethod.vue'
import SurveyInfoVue from '@/components/Service/ServiceInputForm/SurveyInfo.vue'
import PaymentOption from '@/components/Service/ServiceInputForm/PaymentOption.vue'
import PaymentInfo from '@/components/Service/ServiceInputForm/PaymentInfo.vue'

export default {
  name: 'ServiceInputForm',
  components: {
    OptionInfoVue,
    PaymentMethodVue,
    SurveyInfoVue,
    PaymentOption,
    PaymentInfo
  }
}
</script>

<style>

</style>