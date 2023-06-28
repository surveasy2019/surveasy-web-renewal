<template>
  <div>
    <ContactFAQVue />
    <ContactChannelVue />
  </div>
</template>

<script>
import ContactFAQVue from '@/components/Contact/ContactFAQ.vue'
import ContactChannelVue from '@/components/Contact/ContactChannel.vue'

export default {
  name: 'ContactContainer',
  components: {
    ContactFAQVue,
    ContactChannelVue
  }
}
</script>

<style>

</style>