<template>
  <div id="app">
    <AppHeader />
    <div class="mainContainer">
      <Whitebox>
    <router-view />
      </Whitebox>

    </div>
    <AppFooter />

  </div>
</template>

<script>
import Whitebox from '@/components/Whitebox'
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Whitebox,
    AppHeader,
    AppFooter
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: 'Open sans';
}

#app {
  /* height: 1164px; */
  /* padding-bottom: 100px; */
  background-color: #eeeff3;
}

p {
  margin: 0;
}

.mainContainer {
  display: flex;
  justify-content: center;
  height: 600px;
}

</style>
