<template>
  <div class="company">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div class="d-flex flex-column justify-center align-center mb-10">
            <h1 class="mb-6">A EMPRESA</h1>
            <img src="/img/after-title.png" />
          </div>
          <div class="text-body text-sm-center">{{ history }}</div>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <img
                :src="companyImage.link"
                :alt="companyImage.alt"
                :key="i"
                width="100%"
              />
            </v-col>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    history:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare venenatis lacinia. Sed lacinia quam non risus suscipit rhoncus. Proin gravida massa id quam hendrerit, sit amet dapibus elit efficitur. Integer ultrices a purus sed semper. Cras vitae eros sed lacus commodo condimentum ornare et tortor. Aliquam ex magna, pretium nec luctus consectetur, mollis nec nunc. ",
    companyImage: [
      {
        link: "/img/company.png",
        description: "Top Tintas 2022",
        alt: "Top Tintas",
      },
    ],
  }),
};
</script>

<style scoped>
.company {
  margin-top: 100px;
}

h1 {
  font-weight: 300;
  font-size: 35px;
  font-family: "Josefin Sans";
  color: rgb(43, 44, 44);
  text-transform: uppercase;
  line-height: 0.521;
}
</style>
