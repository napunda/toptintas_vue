<template>
  <div>
    <Complements />
    <Glaze />
    <Paints />
    <Varnish />
  </div>
</template>

<script>
import Complements from "../components/produtos/Complements.vue";
import Glaze from "../components/produtos/Glaze.vue";
import Paints from "../components/produtos/Paints.vue";
import Varnish from "../components/produtos/Varnish.vue";

export default {
  name: "AllProducts",
  components: {
    Complements,
    Glaze,
    Paints,
    Varnish,
  },
};
</script>
