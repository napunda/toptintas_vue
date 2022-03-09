<template>
  <div class="home">
    <Slide />
    <BrandsSlider />
    <CompanyInfo />
    <Products />
    <Form />
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import BrandsSlider from "../components/BrandsSlider.vue";
import CompanyInfo from "../components/CompanyInfo.vue";
import Form from "../components/Form.vue";
import Products from "../components/Products.vue";
export default {
  name: "Home",

  components: {
    Slide,
    BrandsSlider,
    CompanyInfo,
    Form,
    Products,
  },
};
</script>
