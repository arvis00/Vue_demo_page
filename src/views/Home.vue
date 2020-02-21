<template>
  <div>
    <p class="whiteBoxHeader">{{$route.meta.title }}</p>

    <div class="cardContainer">
      <Card>
        <img class="projectImg" src="../assets/foto.png" alt="" />
      </Card>
      <Card>
        <img class="projectImg" src="../assets/foto.png" alt="" />
      </Card>
      <Card>
        <img class="projectImg" src="../assets/foto.png" alt="" />
      </Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Whitebox from '@/components/Whitebox.vue'
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style>
.cardContainer {
  display: flex;
  justify-content: space-between;
}

.projectImg {
  width: 242px;
  height: 256px;
  margin: 24px 24px auto 24px;
}
</style>
