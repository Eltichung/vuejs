<template>
<the-menu />
<!-- <HomeView />
<BookView /> -->
<!-- <OrderView /> -->
<router-view></router-view>
</template>

<script>
  import TheMenu from '../src/components/TheMenu.vue';
  // import BookView from './view/BookView.vue';
  // import OrderView from './view/OrderView.vue';
export default {
  name: 'App',
  components: {
    TheMenu
  //  HomeView,
  //  BookView
  //  OrderView
  }
}
</script>

<style lang="scss">
  @import "./assets/style/base.scss";
  #app
  {
    display:flex;
  }
</style>
