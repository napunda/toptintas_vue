<template>
  <div class="form">
    <v-sheet height="600px" color="transparent" class="d-flex justify-end">
      <v-sheet height="600px" width="50%" color="transparent">
        <v-form ref="form" v-model="valid" lazy-validation>
          <div class="d-flex justify-center width-50">
            <h1>FALE CONOSCO</h1>
          </div>
          <v-row align="center">
            <v-col sm="6">
              <v-row>
                <v-col cols="6">
                  <label for="nameid">Nome:</label>
                  <v-text-field
                    id="nameid"
                    solo
                    outlined
                    v-model="name"
                    :rules="nameRules"
                    label=""
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <label for="lastnameid">Sobrenome:</label>
                  <v-text-field
                    id="lastnameid"
                    solo
                    outlined
                    v-model="lastname"
                    :rules="lastnameRules"
                    label=""
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <label for="mailid">E-mail:</label>
              <v-text-field
                id="mailid"
                solo
                outlined
                v-model="email"
                :rules="emailRules"
                label=""
                required
              ></v-text-field>
              <label for="messageid">Mensagem:</label>
              <v-textarea
                id="messageid"
                outlined
                no-resize
                messages
                solo
                name="input-7-4"
                label=""
                value=""
                v-model="message"
                :rules="messageRules"
              ></v-textarea>
              <div class="d-flex justify-center">
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  class="mr-4 text-none"
                  @click="submit"
                >
                  Enviar
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Nome é requirido"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é requirido",
      (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
    ],
    message: "",
    messageRules: [(v) => !!v || "Mensagem é requida"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.form {
  background-image: url("/img/form-background.jpg");
  background-position: left;
}
.width-50 {
  width: 50% !important;
}
</style>
