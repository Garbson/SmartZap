<template>
  <v-card
    app
    class="text-white"
    style="background: linear-gradient(to right, #313841, #0fa558)"
  >
    <v-container>
      <v-row align="center" justify="space-between">
        <!-- Coluna 1: Logo -->
        <v-col cols="12" md="3" class="text-center text-md-left">
          <v-img src="/logo.png" alt="Logo" height="200" />
        </v-col>

        <!-- Coluna 2: Sobre -->
        <v-col cols="12" md="3" class="text-center ml-md-auto text-md-left">
          <h3 class="text-h6 font-weight-bold mb-4">
            {{ $t("footer.aboutTitle") }}
          </h3>
          <p class="text-body-2">
            {{ $t("footer.aboutDescription") }}
          </p>
        </v-col>

        <!-- Coluna 3: Redes Sociais e Contato -->
        <v-col cols="12" md="3" class="d-flex flex-column ml-md-auto">
          <p class="text-h6 justify-end font-weight-bold mb-4">
            {{ $t("footer.followUs") }}
          </p>
          <div class="d-flex mb-4">
            <v-btn
              icon
              href="https://facebook.com"
              target="_blank"
              class="mr-md-2"
              variant="text"
            >
              <v-icon size="32"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://twitter.com"
              target="_blank"
              class="mr-md-2"
              variant="text"
            >
              <v-icon size="32"> mdi-twitter </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://instagram.com"
              target="_blank"
              class="mr-md-2"
              variant="text"
            >
              <v-icon size="32"> mdi-instagram </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://linkedin.com"
              target="_blank"
              class="mr-md-2"
              variant="text"
            >
              <v-icon size="32"> mdi-linkedin </v-icon>
            </v-btn>
            <v-btn
              icon
              href="https://wa.me/5511999999999"
              target="_blank"
              class="mr-md-2"
              variant="text"
            >
              <v-icon size="32"> mdi-whatsapp </v-icon>
            </v-btn>
          </div>
          <p class="text-body-2 d-flex align-center">
            <v-icon class="mr-2" color="white"> mdi-email </v-icon>
            {{ $t("footer.contact.email") }}
          </p>
          <p class="text-body-2 d-flex align-center">
            <v-icon class="mr-2" color="white"> mdi-phone </v-icon>
            {{ $t("footer.contact.phone") }}
          </p>
        </v-col>
      </v-row>

      <!-- Rodapé com copyright e créditos do autor -->
      <v-divider class="my-4 border-opacity-25" />

      <v-row>
        <v-col cols="12" class="text-center py-2">
          <p class="text-body-2 mb-0">
            {{ $t("footer.copyright") }}
          </p>
        </v-col>
      </v-row>

      <!-- Assinatura do desenvolvedor - versão criativa -->
      <v-row class="justify-center pt-0 pb-2">
        <v-col cols="auto">
          <v-card
            variant="flat"
            class="bg-transparent pa-0 rounded-xl clickable-card"
            @click="openWhatsApp"
          >
            <div
              class="d-flex align-center justify-center dev-signature px-4 py-1"
            >
              <span class="text-caption mr-1">{{
                $t("footer.createdBy")
              }}</span>
              <v-tooltip location="top">
                <template #activator="{ props }">
                  <span
                    class="text-caption font-weight-bold gradient-text"
                    v-bind="props"
                  >
                    {{ $t("footer.author") }}
                  </span>
                </template>
                <span> Full-stack Developer </span>
              </v-tooltip>
              <v-icon size="20" color="#25D366" class="ml-1">
                mdi-whatsapp
              </v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Função para abrir o WhatsApp
const openWhatsApp = () => {
  window.open("https://wa.me/5568992490198", "_blank");
};
</script>

<style scoped>
.text-white a {
  color: white;
  text-decoration: none;
}

.text-white a:hover {
  text-decoration: underline;
}

.gradient-text {
  background: linear-gradient(to right, #ffffff, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
}

.dev-signature {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.dev-signature:hover {
  background-color: rgba(15, 165, 88, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.clickable-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.clickable-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(15, 165, 88, 0.2);
}

.clickable-card:active {
  transform: translateY(-1px);
}
</style>
