<template>
  <div>
    <v-container class="mt-16">
      <div class="d-flex flex-column justify-center align-center title">
        <h1 class="mb-5">Vernizes</h1>
        <img src="/img/after-title.png" class="mt-1" />
      </div>
      <Varnish />
    </v-container>
  </div>
</template>

<script>
import Varnish from "../components/produtos/Varnish.vue";

export default {
  components: {
    Varnish,
  },
};
</script>

<style>
h1 {
  font-weight: 300;
  font-size: 48px;
  font-family: "Josefin Sans";
  color: rgb(43, 44, 44);
  text-transform: uppercase;
  line-height: 0.521;
}
</style>
