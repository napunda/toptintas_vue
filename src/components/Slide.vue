<template>
  <div class="slide">
    <v-carousel height="750px" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "../img/slide-top-tintas.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.slide .v-btn--icon.v-size--default .v-icon {
  font-size: 22px !important;
}
</style>
