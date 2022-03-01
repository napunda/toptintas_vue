<template>
  <div class="footer">
    <v-footer height="280" color="grey darken-4">
      <v-container d-flex justify-center>
        <v-list flat color="transparent">
          <v-list-item class="white--text text-h6">Contato</v-list-item>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              :target="item.target"
              :href="item.link"
              class="white--text"
              v-for="(item, i) in contacts"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon color="white">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-spacer />
        <v-list flat color="transparent">
          <v-list-item class="text-h6 white--text">Redes Sociais</v-list-item>
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            target="_blank"
            :href="social.link"
            text
            icon
          >
            <v-icon color="white">{{ social.icon }}</v-icon>
          </v-btn>
        </v-list>
        <v-spacer />
        <v-sheet
          color="transparent"
          class="align-center d-flex flex-column justify-end"
        >
          <router-link to="//mrxweb.com.br" target="_blank">
            <v-img
              light
              class="shrink mr-4"
              alt="TopTintas"
              src="/img/logo-mrx.svg"
              width="180"
              contain
            >
            </v-img>
          </router-link>
          <p class="white--text">
            © 2021 TOP Tintas - Todos os direitos reservados.
          </p>
        </v-sheet>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    contacts: [
      {
        text: "(66) 99720-2020",
        icon: "fab fa-whatsapp",
        link: "//facebook.com",
        target: "_blank",
      },
      {
        text: "toptintas@toptintas.com",
        icon: "fas fa-envelope",
        link: "mailto:toptintas@toptintas.com",
        target: "_self",
      },
      {
        text: "Av. dos Tarumãs, 1205 Jardim Botânico, Sinop - MT",
        icon: "fas fa-map-marker-alt",
        link: "//facebook.com",
        target: "_blank",
      },
    ],
    socials: [
      { icon: "fab fa-facebook-f", link: "//facebook.com" },
      { icon: "fab fa-instagram", link: "//instagram.com" },
    ],
  }),
};
</script>
<style scoped></style>
