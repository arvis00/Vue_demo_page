<template>
  <div class="navBar">
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT ME</router-link>
    <router-link to="/contacts">CONTACTS</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
.navBar {
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  padding-top: 42px;
  padding-right: 122px;
}

.navBar a {
  margin-left: 10px;
  color: #fff;

  &.router-link-exact-active {
    color: #37e9b8;
  }
}
</style>
