<template>
  <div class="home">
    <Slide />
    <BrandsSlider />
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import BrandsSlider from "../components/BrandsSlider.vue";
export default {
  name: "Home",

  components: {
    Slide,
    BrandsSlider,
  },
};
</script>
