<template>
  <div class="products">
    <v-container class="d-flex flex-column">
      <div class="d-flex flex-column justify-center align-center title">
        <h1 class="mb-5">PRODUTOS</h1>
        <img src="/img/after-title.png" class="mt-1" />
        <p class="mt-6">
          Escolha uma categoria abaixo e conheça nossos produtos!
        </p>
      </div>
      <v-row align="center">
        <!-- <v-col cols="3"
          ><v-card class="pa-8" to="/produtos">
            <div class="img-card">
              <img src="/img/01.png" height="100%" />
            </div>

            <div class="d-flex justify-center card-title">
              <v-card-title>Vernizes</v-card-title>
            </div>
            <v-card-text class="pa-4"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </v-card-text></v-card
          >
        </v-col> -->
        <v-col cols="3" v-for="(product, i) in products" :key="i">
          <v-card class="pa-8" to="/produtos">
            <div class="img-card">
              <img :src="product.img" height="100%" />
            </div>
            <div class="d-flex justify-center card-title">
              <v-card-title>{{ product.titleCard }}</v-card-title>
            </div>
            <div>
              <v-card-text class="pa-4">{{
                product.descriptionCard
              }}</v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="d-flex justify-center my-10">
        <v-btn to="/produtos" rounded color="primary"> Ver todos </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    products: [
      {
        img: "/img/01.png",
        titleCard: "Vernizes",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        img: "/img/02.png",
        titleCard: "Tintas",
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
        img: "/img/04.png",
        titleCard: "Esmaltes",
        descriptionCard:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
    ],
  }),
};
</script>

<style scoped>
h1 {
  font-weight: 300;
  font-size: 48px;
  font-family: "Josefin Sans";
  color: rgb(43, 44, 44);
  text-transform: uppercase;
  line-height: 0.521;
}
.v-card {
  text-align: center;
  align-items: center;
  align-content: center;
  padding-top: 0px !important;
}
img {
  margin-top: -80px;
}
.card-title {
  margin-top: -60px;
}
.title {
  margin-bottom: 120px;
}
.img-card {
  height: 180px !important;
}
</style>
