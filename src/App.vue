<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1194px !important;
  }
}
</style>
