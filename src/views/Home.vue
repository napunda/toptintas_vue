<template>
  <div class="home">
    <Slide />
    <BrandsSlider />
    <CompanyInfo />
    <Form />
  </div>
</template>

<script>
import Slide from "../components/Slide.vue";
import BrandsSlider from "../components/BrandsSlider.vue";
import CompanyInfo from "../components/CompanyInfo.vue";
import Form from "../components/Form.vue";
export default {
  name: "Home",

  components: {
    Slide,
    BrandsSlider,
    CompanyInfo,
    Form,
  },
};
</script>
