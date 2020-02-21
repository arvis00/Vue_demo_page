<template>
  <div>
    <button @click='onClick'>
      {{buttonName}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonName: String
  },
  methods: {
    onClick (event) {
      this.$emit('submit', event)
    }
  }
}
</script>

<style scoped>
button{
  height: 45px;
  width: 170px;
  background-color: #3252e5;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
button:focus {
  outline-width: 0px;
}
</style>
