<template>
  <div class="products">
    <v-container>
      <div class="d-flex flex-column justify-center align-center mb-6">
        <h1 class="mb-6">PRODUTOS</h1>
        <img src="/img/after-title.png" width="" />
        <p class="mt-6">
          Escolha uma categoria abaixo e conheça nossos produtos!
        </p>
      </div>
      <v-row align="center">
        <v-col cols="3"
          ><v-card class="pa-8" to="/produtos">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div class="d-flex justify-center">
              <v-card-title>Vernizes</v-card-title>
            </div>
            <v-card-text class="pa-4"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore perspiciatis ab nobis numquam hic doloribus nulla ullam!
              Delectus nulla, enim eos vitae similique accusantium eius non
              obcaecati, dolores neque mollitia!</v-card-text
            ></v-card
          ></v-col
        >
        <v-col cols="3"
          ><v-card class="pa-8" to="/produtos">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div class="d-flex justify-center">
              <v-card-title>Tintas</v-card-title>
            </div>
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore perspiciatis ab nobis numquam hic doloribus nulla ullam!
              Delectus nulla, enim eos vitae similique accusantium eius non
              obcaecati, dolores neque mollitia!</v-card-text
            ></v-card
          ></v-col
        >
        <v-col cols="3"
          ><v-card class="pa-8" to="/produtos">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div class="d-flex justify-center">
              <v-card-title>Complementos</v-card-title>
            </div>
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore perspiciatis ab nobis numquam hic doloribus nulla ullam!
              Delectus nulla, enim eos vitae similique accusantium eius non
              obcaecati, dolores neque mollitia!</v-card-text
            ></v-card
          ></v-col
        >
        <v-col cols="3"
          ><v-card class="pa-8" to="/produtos">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div class="d-flex justify-center">
              <v-card-title>Esmaltes</v-card-title>
            </div>
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore perspiciatis ab nobis numquam hic doloribus nulla ullam!
              Delectus nulla, enim eos vitae similique accusantium eius non
              obcaecati, dolores neque mollitia!</v-card-text
            ></v-card
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>
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
.v-img {
  margin-top: -100px !important;
  /* object-fit: contain; <----- */
}
.produtcs {
  background-image: blue;
}
</style>
