<template>
<div>
  <p class="whiteBoxHeader">{{$route.meta.title }}</p>
  <form @submit.prevent='sendData'>
    <AppInput v-model="contactName" labelName='NAME'></AppInput>
    <AppTextarea v-model="contactMessage" labelName='MESSAGE'></AppTextarea>
    <AppButton type="submit" class='sendButton' buttonName='SEND'></AppButton>
  </form>
</div>
</template>

<script>
import AppInput from '@/components/Input'
import AppTextarea from '@/components/Textarea'
import AppButton from '@/components/Button'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Contacts',
  components: {
    AppInput,
    AppTextarea,
    AppButton
  },
  computed: {
    contactName: {
      get () {
        return this.$store.state.contactName
      },
      set (value) {
        this.$store.commit('setContactName', value)
      }
    },
    contactMessage: {
      get () {
        return this.$store.state.contactMessage
      },
      set (value) {
        this.$store.commit('setContactMessage', value)
      }
    },
    ...mapGetters({
    //   contactName: 'contactName',
    //   contactMessage: 'contactMessage'
    })
  },
  methods: {
    ...mapActions({
      sendData: 'sendData'
    }),
    ...mapMutations({
      // setContactName: 'setContactName',
      // setContactMessage: 'setContactMessage'
    })
  }
}
</script>

<style>
.sendButton{
  margin-top: 45px;
}
</style>
