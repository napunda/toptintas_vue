<template>
  <header>
    <div class="subheader">
      <div class="container subheader">
        <ul id="icons">
          <li v-for="item in items" :key="item.icon">
            <a :href="item.link">
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <v-app-bar class="" height="104px" flat>
      <v-container class="d-flex flex-row pa-0">
        <img
          id="logo"
          src="/img/logo-top-tintas.png"
          height="80px"
          alt=""
          class="py-2"
        />
        <v-spacer></v-spacer>
        <app-bar id="nav">
          <v-btn :to="menu.link" v-for="menu in menus" :key="menu.title" text>
            {{ menu.title }}
          </v-btn>
        </app-bar>
      </v-container>
    </v-app-bar> -->
    <div class="header container">
      <img height="90px" src="/img/logo-top-tintas.png" alt="" />
      <ul id="nav">
        <li v-for="menu in menus" :key="menu.title">
          <a :href="menu.link">
            {{ menu.title }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    menus: [
      { title: "HOME", link: "#" },
      { title: "A EMPRESA", link: "#" },
      { title: "PRODUTOS", link: "#" },
      { title: "MARCAS", link: "#" },
      { title: "FALE CONOSCO", link: "#" },
    ],

    items: [
      { icon: "fas fa-phone", link: "//facebook.com" },
      { icon: "fab fa-whatsapp", link: "//facebook.com" },
      { icon: "fas fa-map-marker-alt", link: "//facebook.com" },
      { icon: "fas fa-envelope", link: "//facebook.com" },
      { icon: "fab fa-facebook-f", link: "//facebook.com" },
      { icon: "fab fa-instagram", link: "//facebook.com" },
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;500;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.subheader {
  height: 47px;
  width: 100%;
  background-color: #343434;
  display: flex;
  justify-content: right;
  align-items: center;
}

.subheader ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 0rem;
}

.subheader ul li {
  margin-left: 1.5rem;
}

.subheader i {
  color: white;
  font-size: 16px;
}

.header {
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: right;
  align-items: center;
}

.header ul {
  display: flex;
}

.header ul li a {
  list-style: none;
  margin-left: 2rem;
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  color: #6e6e6e;
}

.header ul li {
  list-style: none;
}
</style>
