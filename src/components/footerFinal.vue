<template>
  <v-card
    app
    class="text-white"
    style="background: linear-gradient(to right, #313841, #0FA534);"
  >
    <v-container>
      <v-row
        align="center"
        justify="space-between"
      >
        <!-- Coluna 1: Logo -->
        <v-col
          cols="12"
          md="3"
          class="text-center text-md-left"
        >
          <v-img
            src="/logo.png"
            alt="Logo"
            height="200"
          />
        </v-col>

        <!-- Coluna 2: Sobre -->
        <v-col
          cols="12"
          md="3"
          class="text-center ml-md-auto text-md-left"
        >
          <h3 class="text-h6 font-weight-bold mb-4">
            {{ $t('footer.aboutTitle') }}
          </h3>
          <p class="text-body-2">
            {{ $t('footer.aboutDescription') }}
          </p>
        </v-col>

        <!-- Coluna 3: Redes Sociais e Contato -->
        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column ml-md-auto"
        >
          <p class="text-h6 justify-end font-weight-bold mb-4">
            {{ $t('footer.followUs') }}
          </p>
          <div class="d-flex mb-4">
            <v-btn
              icon
              href="https://facebook.com"
              target="_blank"
              class="mr-md-2"
            >
              <v-icon size="32">
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://twitter.com"
              target="_blank"
              class="mr-md-2"
            >
              <v-icon size="32">
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://instagram.com"
              target="_blank"
              class="mr-md-2"
            >
              <v-icon size="32">
                mdi-instagram
              </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://linkedin.com"
              target="_blank"
              class="mr-md-2"
            >
              <v-icon size="32">
                mdi-linkedin
              </v-icon>
            </v-btn>
          </div>
          <p class="text-body-2">
            <v-icon
              left
              color="white"
            >
              mdi-email
            </v-icon>
            {{ $t('footer.contact.email') }}
          </p>
          <p class="text-body-2">
            <v-icon
              left
              color="white"
            >
              mdi-phone
            </v-icon>
            {{ $t('footer.contact.phone') }}
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-10">
        <v-col
          cols="12"
          class="text-center"
        >
          <p class="text-body-2">
            {{ $t('footer.copyright') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
</script>

<style scoped>
.text-white a {
  color: white;
  text-decoration: none;
}
.text-white a:hover {
  text-decoration: underline;
}
</style>
