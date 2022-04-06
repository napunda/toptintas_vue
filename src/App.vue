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
  data: () => ({
    loading: true,
  }),
  computed: {
    informations() {
      return this.$rest("informations").item;
    },
    name() {
      return this.informations.name || "";
    },
  },
  methods: {
    updateDocumentTitle() {
      document.title = !this.name
        ? this.$route.name
        : `${this.$route.name} - ${this.name}`;
    },
  },
  watch: {
    $route() {
      this.updateDocumentTitle();
    },
    informations() {
      this.loading = false;
    },
    name() {
      this.updateDocumentTitle();
    },
  },
  beforeCreate() {
    this.$rest("informations").get({
      save: (state, data) => (state.item = data),
    });
  },
  created() {
    this.updateDocumentTitle();
  },
  components: {
    Header,
    Footer,
  },
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
