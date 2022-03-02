<template>
  <div class="form">
    <v-sheet height="600px" color="transparent" class="d-flex justify-end">
      <v-sheet height="600px" width="50%" color="transparent">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col sm="6">
              Nome:
              <v-text-field
                solo
                outlined
                v-model="name"
                :counter="30"
                :rules="nameRules"
                label=""
                required
              ></v-text-field>
              E-mail
              <v-text-field
                solo
                outlined
                v-model="email"
                :rules="emailRules"
                label=""
                required
              ></v-text-field>
              <v-textarea
                outlined
                solo
                name="input-7-4"
                label="Outlined textarea"
                value="Sua mensagem"
              ></v-textarea>
              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Validate
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>

              <v-btn color="warning" @click="resetValidation">
                Reset Validation
              </v-btn>
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
    nameRules: [
      (v) => !!v || "Nome é requirido",
      (v) => (v && v.length <= 30) || "Nome deve ter menos que 30 caracteres.",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é requirido",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.form {
  background-image: url("/img/form-background.jpg");
  background-position: left;
}
</style>
