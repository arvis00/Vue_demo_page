<template>
  <div class="mainHeader">
    <AppNav />
    <p class="nameHeading">NAME SURNAME</p>
    <p class="portfolioHeading">PORTFOLIO</p>
  </div>
</template>

<script>
import AppNav from '@/components/Nav'

export default {
  name: 'Header',
  components: {
    AppNav
  }
}
</script>

<style>
.mainHeader {
  height: 469px;
  width: 100%;
  background-color: #3252e5;
  text-align: center;
}
.nameHeading {
  font-size: 36px;
  font-weight: 600;
  padding-top: 169px;
  color: #fff;
}
.portfolioHeading {
  font-size: 18px;
  font-weight: 600px;
  margin-top: 22px;
  color: #fff;
}

</style>
