<template>
  <div class="home">
    <Slide />
    <Brands />
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import Brands from "../components/Brands.vue";
export default {
  name: "Home",

  components: {
    Slide,
    Brands,
  },
};
</script>
