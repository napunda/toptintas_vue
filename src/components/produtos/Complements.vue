<template>
  <div class="my-16">
    <v-container class="d-flex flex-column">
      <v-row align="center">
        <v-col cols="3" v-for="(product, i) in products" :key="i">
          <v-card class="pa-8 my-10" to="/produtos">
            <div class="d-flex justify-center card-title">
              <v-card-title>{{ product.titleCard }}</v-card-title>
            </div>
            <div>
              <v-card-text class="pa-4">{{
                product.descriptionCard
              }}</v-card-text>
            </div>
            <div class="img-card">
              <img :src="product.img" height="100%" />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        img: "/img/03.png",
        titleCard: "Complementos",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        img: "/img/03.png",
        titleCard: "Complementos",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        img: "/img/03.png",
        titleCard: "Complementos",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        img: "/img/03.png",
        titleCard: "Complementos",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        img: "/img/03.png",
        titleCard: "Complementos",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        img: "/img/03.png",
        titleCard: "Complementos",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  text-align: center;
  align-items: center;
  align-content: center;
  padding-top: 0px !important;
}
img {
  margin-bottom: -250px;
}
.title {
  margin-bottom: 120px;
}
.img-card {
  height: 180px !important;
}
</style>
