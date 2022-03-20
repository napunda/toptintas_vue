<template>
  <div class="contact-us">
    <v-container>
      <v-row>
        <v-col cols="6"><Form /></v-col>
        <v-col cols="6"
          ><v-list flat color="grey darken-4">
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
            </v-list-item-group> </v-list
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Form from "../components/Form.vue";

export default {
  components: {
    Form,
  },
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
