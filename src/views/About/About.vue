<template>
  <div class="about">
    <p class="whiteBoxHeader">{{ $route.meta.title }}</p>
    <p class="descriptionAboutMe">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris vel
      mauris consequat pharetra. Donec semper turpis nisi, at tincidunt enim
      faucibus vitae. Praesent iaculis quis lectus aliquam volutpat. Cras in
      ultricies nisl, sit amet imperdiet velit. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Quisque tincidunt porttitor eros in
      tincidunt. Morbi quam mi, tincidunt in justo in, posuere laoreet ipsum.
      Vestibulum facilisis metus tempor, volutpat odio a, posuere dolor.
      Suspendisse potenti. Etiam venenatis tristique erat ut iaculis. Aliquam
      erat volutpat. Donec consequat erat erat, id finibus dolor interdum sed.
      Morbi dui mi, ultricies eu erat in, efficitur rutrum nisi. Nam
      pellentesque commodo magna, sit amet euismod urna commodo sed.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas.
    </p>
    <div class="aboutBtnContainer">
      <router-link class="aboutMeLinks" to="/about/">EDUCATION</router-link>
      <router-link class="aboutMeLinks" to="/about/career">CAREER</router-link>
      <router-link class="aboutMeLinks" to="/about/knowledge"
        >KNOWLEDGE</router-link
      >
    </div>
    <div class="detailsContainer">
      <div class="details">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
.descriptionAboutMe {
  font-size: 16px;
}
.aboutMeLinks {
  font-size: 16px;
  margin-right: 32px;
  color: #000;

  &.router-link-exact-active {
    color: #3252e5;
  }
}
.aboutBtnContainer {
  margin: 33px 0 33px;
}
.detailsContainer {
  height: 250px;
  background-color: #eeeff3;
}
.details {
  font-size: 18px;
  padding-top: 71px;
  padding-left: 61px;
}
</style>
