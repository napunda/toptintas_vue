<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
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
.josefin-sans {
  font-family: "Josefin Sans", sans-serif;
}
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1194px !important;
  }
}
</style>
