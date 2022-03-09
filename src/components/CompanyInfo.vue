<template>
  <div class="company margin">
    <v-img height="800px">
      <v-container>
        <v-sheet
          color="transparent"
          width="100%"
          class="d-flex justify-center mb-16"
        >
          <div class="d-flex flex-column justify-center align-center">
            <h1 class="mb-6">A EMPRESA</h1>
            <img src="/img/after-title.png" width="70%" />
          </div>
        </v-sheet>
        <v-sheet
          width="50%"
          color="transparent"
          class="d-flex align-center flex-column"
        >
          <div class="text-width">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              consequuntur aliquid rerum quos harum voluptates facilis
              consequatur nisi. Error impedit itaque dolore eos porro? Obcaecati
              aliquid iure et quas quis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <v-btn to="/a-empresa" rounded color="primary"> Saiba Mais </v-btn>
        </v-sheet>
      </v-container>
    </v-img>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 18px;
  font-family: "Poppins";
  color: rgb(101, 101, 101);
  line-height: 1.778;
}

.company {
  background-image: url("/img/a-empresa2.png");
  background-position: right;
  background-size: 50%;
}
h1 {
  font-weight: 300;
  font-size: 48px;
  font-family: "Josefin Sans";
  color: rgb(43, 44, 44);
  text-transform: uppercase;
  line-height: 0.521;
}
.margin {
  margin-bottom: 150px;
  margin-top: 150px;
}
.text-width {
  width: 456px;
}
</style>
