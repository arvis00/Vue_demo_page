<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
.card {
  width: 290px;
  height: 373px;
  background-color: #3252e5;
}
</style>
