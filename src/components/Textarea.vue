<template>
  <div>
    <label :for="labelName">{{ labelName }}</label>
    <textarea :value="value" :id="labelName" type="text" @input="$emit('input', $event.target.value)"></textarea>
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
textarea {
  width: 1077px;
  height: 129px;
  margin-top: 11px;
  border: solid 1px #000;
  resize: none;
}
textarea:focus {
  outline-width: 0px;
}

textarea,
label {
  display: block;
  font-size: 14px;
}
</style>
