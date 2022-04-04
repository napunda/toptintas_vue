<template>
  <div>
    <v-container>
      <h2>Complementos</h2>
      <Complements />
      <h2>Esmaltes</h2>
      <Glaze />
      <h2>Tintas</h2>
      <Paints />
      <h2>Vernizes</h2>
      <Varnish />
      <div class="d-flex justify-center my-10">
        <v-btn to="/produtos" rounded color="primary"> Categorias </v-btn>
      </div>
    </v-container>
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
