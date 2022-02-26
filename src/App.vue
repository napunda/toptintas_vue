<template>
  <div class="app">
    <Header />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
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
