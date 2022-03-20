<template>
  <div>
    <v-container class="mt-16">
      <div class="d-flex flex-column justify-center align-center title">
        <h1 class="mb-5">Tintas</h1>
        <img src="/img/after-title.png" class="mt-1" />
      </div>
      <Paints />
    </v-container>
  </div>
</template>

<script>
import Paints from "../components/produtos/Paints.vue";

export default {
  components: {
    Paints,
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
