<template>
  <div>
    <label :for="labelName">{{labelName}}</label>
    <input :value="value" :id="labelName" type="text" required @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    labelName: String
  }

}
</script>

<style scoped>
input{
  width: 296px;
  height: 48px;
  margin-top: 11px;
  margin-bottom: 34px;
  border: solid 1px #000;
}

input:focus {
  outline-width: 0px;
}

input, label {
    display:block;
    font-size: 14px;
}
</style>
