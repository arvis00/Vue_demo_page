<template>
  <div class="whiteBox">
    <div class="whiteBoxContainer">
    <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Whitebox'
}
</script>

<style>
.whiteBox {
  width: 1196px;
  background-color: #fff;
  position: absolute;
  top: 427px;
}

.whiteBoxHeader {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 47px;
}

.whiteBoxContainer {
  padding: 75px 60px 112px 60px;
}
</style>
