<template>
  <div class="header">
    <v-sheet color="grey darken-4" height="47" class="d-flex align-center">
      <v-container d-flex justify-end>
        <v-btn
          v-for="item in items"
          :key="item.icon"
          text
          icon
          :to="item.link"
          target="_blank"
        >
          <v-icon size="small" color="#fff">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-container>
    </v-sheet>
    <v-sheet
      height="104px"
      class="justify-space-between align-center"
      elevation="3"
    >
      <v-container class="py-0 h-100" d-flex align-center>
        <router-link to="/"
          ><v-img
            class="shrink mr-2"
            alt="TopTintas"
            :src="logo"
            width="200"
            contain
          >
          </v-img
        ></router-link>

        <v-toolbar flat class="d-flex align-center justify-end">
          <v-btn
            class="pa-2 josefin-sans"
            x-large
            :to="menu.route"
            v-for="menu in menus"
            :key="menu.title"
            text
            tag
            color="grey darken-1"
          >
            {{ menu.title }}
          </v-btn>
        </v-toolbar>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    menus: [
      { title: "HOME", route: "/" },
      { title: "A EMPRESA", route: "/a-empresa" },
      { title: "PRODUTOS", route: "/produtos" },
      { title: "MARCAS", route: "/marcas" },
      { title: "FALE CONOSCO", route: "/fale-conosco" },
    ],

    items: [
      { icon: "fas fa-phone", link: "//facebook.com" },
      { icon: "fab fa-whatsapp", link: "//facebook.com" },
      { icon: "fas fa-map-marker-alt", link: "//facebook.com" },
      { icon: "fas fa-envelope", link: "//facebook.com" },
      { icon: "fab fa-facebook-f", link: "//facebook.com" },
      { icon: "fab fa-instagram", link: "//facebook.com" },
    ],
    logo: "/img/logo-top-tintas.png",
  }),
};
</script>
<style scoped>
.h-100 {
  height: 100%;
}
</style>
