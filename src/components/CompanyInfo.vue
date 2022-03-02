<template>
  <div class="company">
    <v-img height="500px">
      <v-container>
        <v-sheet
          color="transparent"
          width="100%"
          class="d-flex justify-center my-16"
          ><h1>A EMPRESA</h1></v-sheet
        >
        <v-sheet
          width="50%"
          color="transparent"
          class="d-flex align-center flex-column"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            consequuntur aliquid rerum quos harum voluptates facilis consequatur
            nisi. Error impedit itaque dolore eos porro? Obcaecati aliquid iure
            et quas quis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis aut veritatis consequuntur dolorum consequatur
            necessitatibus dolorem illo voluptatum adipisci, nam incidunt in
            magnam quibusdam, dignissimos inventore saepe ab maxime deserunt!
          </p>
          <v-btn to="/a-empresa" rounded color="primary"> Saiba Mais </v-btn>
        </v-sheet>
      </v-container>
    </v-img>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}

.company {
  background-image: url("/img/A-impresa.png");
  background-position: right;
}
</style>
