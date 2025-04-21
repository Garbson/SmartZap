<template>
  <v-app-bar
    app
    style="background: linear-gradient(to right, #313841, #0FA555);"
    dark
  >
    <v-container>
      <v-row
        align="center"
        justify="space-between"
        class="pa-0"
      >
        <!-- Logo -->
        <v-col
          class="d-flex align-center"
          cols="6"
          md="4"
        >
          <v-img
            src="/logo.png"
            alt="Logo"
            max-width="100"
            max-height="75"
          />
        </v-col>

        <!-- Botão hambúrguer para telas pequenas -->
        <v-col
          cols="6"
          class="d-flex justify-end d-md-none"
        >
          <v-menu
            offset-y
            right
            color="secondary"
          >
            <template #activator="{ props }">
              <v-btn
                icon
                v-bind="props"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-btn
                  block
                  text
                  color="primary"
                >
                  {{ $t("navbar.about") }}
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  block
                  text
                  color="primary"
                >
                  {{ $t("navbar.properties") }}
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn
                  block
                  text
                  color="primary"
                >
                  {{ $t("navbar.contact") }}
                </v-btn>
              </v-list-item>
              <v-divider />
              <v-list-item
                class="d-flex justify-center"
              >
                <div
                  class="icon-btn"
                  :class="{ active: locale === 'en' }"
                  @click="changeLanguage('en')"
                >
                  <v-img
                    src="/estados-unidos.png"
                    alt="Estados Unidos"
                    max-height="24"
                    max-width="24"
                    contain
                  />
                </div>
                <div
                  class="icon-btn"
                  :class="{ active: locale === 'pt' }"
                  @click="changeLanguage('pt')"
                >
                  <v-img
                    src="/brasil.png"
                    alt="Brasil"
                    max-height="24"
                    max-width="24"
                    contain
                  />
                </div>
                <div
                  class="icon-btn"
                  :class="{ active: locale === 'es' }"
                  @click="changeLanguage('es')"
                >
                  <v-img
                    src="/espanha.png"
                    alt="Espanha"
                    max-height="24"
                    max-width="24"
                    contain
                  />
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <!-- Links para telas maiores -->
        <v-col
          class="d-none d-md-flex nav-links justify-center"
          md="4"
        >
          <v-btn
            text
            color="white"
          >
            {{ $t("navbar.about") }}
          </v-btn>
          <v-btn
            text
            color="white"
          >
            {{ $t("navbar.properties") }}
          </v-btn>
          <v-btn
            text
            color="white"
          >
            {{ $t("navbar.contact") }}
          </v-btn>
        </v-col>

        <!-- Opções de tradução -->
        <v-col
          class="d-none d-md-flex justify-end"
          md="4"
        >
          <div class="translation-options">
            <div
              class="icon-btn"
              :class="{ active: locale === 'en' }"
              @click="changeLanguage('en')"
            >
              <v-img
                src="/estados-unidos.png"
                alt="Estados Unidos"
                max-height="24"
                max-width="24"
                contain
              />
            </div>
            <div
              class="icon-btn"
              :class="{ active: locale === 'pt' }"
              @click="changeLanguage('pt')"
            >
              <v-img
                src="/brasil.png"
                alt="Brasil"
                max-height="24"
                max-width="24"
                contain
              />
            </div>
            <div
              class="icon-btn"
              :class="{ active: locale === 'es' }"
              @click="changeLanguage('es')"
            >
              <v-img
                src="/espanha.png"
                alt="Espanha"
                max-height="24"
                max-width="24"
                contain
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang; // Altera o idioma
};
</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 20px;
}

.translation-options {
  display: flex;
  gap: 10px;
}

.icon-btn {
  padding: 0;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.icon-btn.active {
  border: 2px solid rgb(255, 255, 255);
  background-color: rgba(43, 145, 56, 0.2);
}

.icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>