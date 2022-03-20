<template>
  <div class="home">
    <Slide />
    <BrandsSlider />
    <CompanyInfo />
    <Products />
    <Contact />
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import BrandsSlider from "../components/BrandsSlider.vue";
import CompanyInfo from "../components/CompanyInfo.vue";
import Contact from "../components/Contact.vue";
import Products from "../components/Products.vue";
export default {
  name: "Home",

  components: {
    Slide,
    BrandsSlider,
    CompanyInfo,
    Contact,
    Products,
  },
};
</script>
