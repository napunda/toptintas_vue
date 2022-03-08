<template>
  <div class="brand">
    <div class="carrousel-background">
      <v-container>
        <v-sheet class="mx-auto" color="transparent">
          <v-slide-group multiple show-arrows loop>
            <v-slide-item>
              <v-btn rounded class="mx-2" text height="150px">
                <img src="/img/Atlas.png" alt="" width="150px" />
              </v-btn>
            </v-slide-item>
            <v-slide-item>
              <v-btn rounded class="mx-2" text height="150px">
                <img src="/img/resicolor-tintas.png" alt="" width="150px" />
              </v-btn>
            </v-slide-item>
            <v-slide-item>
              <v-btn rounded class="mx-2" text height="150px">
                <img src="/img/coral.png" alt="" width="150px" />
              </v-btn>
            </v-slide-item>
            <v-slide-item>
              <v-btn rounded class="mx-2" text height="150px">
                <img src="/img/sayerlack.jpg" alt="" width="150px" />
              </v-btn>
            </v-slide-item>
            <v-slide-item>
              <v-btn rounded class="mx-2" text height="150px">
                <img src="/img/sparlack.png" alt="" width="150px" />
              </v-btn>
            </v-slide-item>
            <v-slide-item>
              <v-btn rounded class="mx-2" text height="150px">
                <img src="/img/sherwin-williams.png" alt="" width="150px" />
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.carrousel-background {
  background-image: url("/img/brands-background.jpg");
}

.v-btn {
  filter: grayscale(100%);
  transition: 0.8s;
}
.v-btn:hover {
  filter: grayscale(0%);
}
</style>
