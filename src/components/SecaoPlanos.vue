<template>
  <v-container
    id="planos"
    fluid
    class="py-10 bg-primary"
  >
    <!-- Título Centralizado -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center mb-4"
      >
        <p class="text-h4 font-weight-bold text-white">
          {{ $t('plans.payOnce') }}
        </p>
      </v-col>
    </v-row>

    <!-- Card Premium Annual em layout de coluna -->
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
        class="d-flex flex-column align-center"
      >
        <!-- Card Principal -->
        <v-card
          class="pa-6 bg-surface rounded-xl mb-6 d-flex flex-column align-center"
          width="100%"
          variant="elevated"
          elevation="2"
        >
          <v-card 
            class="pa-10 rounded-xl border border-3 d-flex flex-column align-center" 
            max-width="700"
            variant="outlined"
          >
            <p class="text-h5 font-weight-bold mb-4">
              {{ $t('plans.annualLicense') }}
            </p>

            <!-- Card interno para selecionar quantidade -->
            <v-card
              class="pa-4 d-flex flex-column mb-6 rounded-xl align-center"
              variant="outlined"
            >
              <p class="text-subtitle-1 mb-4">
                {{ $t('plans.selectLicenses') }}
              </p>
              <!-- Controle de quantidade com + e - -->
              <v-row
                justify="center"
                align="center"
                class="mb-4"
              >
                <v-col cols="auto">
                  <v-btn
                    icon
                    color="secondary"
                    variant="elevated"
                    @click="decrementLicenses"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-col>
              
                <v-col cols="auto">
                  <div class="text-h4 font-weight-bold px-6">
                    {{ selectedLicenses }}
                  </div>
                </v-col>
              
                <v-col cols="auto">
                  <v-btn
                    icon
                    color="secondary"
                    variant="elevated"
                    @click="incrementLicenses"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            
              <v-row class="mt-4">
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <p class="text-h4 font-weight-bold text-secondary">
                    {{ getPrice(selectedLicenses) }}
                  </p>
                </v-col>
              </v-row>
            
              <v-row class="mt-2">
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <v-btn
                    color="secondary"
                    class="rounded-xl px-8"
                    size="large"
                    elevation="2"
                    href="https://chromewebstore.google.com/detail/smartzap/lecapbnkojjbcmpgojanclnilcnemjpk"
                    target="_blank"
                    variant="elevated"
                  >
                    <v-icon
                      start
                      class="mr-2"
                    >
                      mdi-download
                    </v-icon>
                    {{ $t('plans.button') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>

            <!-- Lista de recursos - Centralizada com texto alinhado à esquerda -->
            <v-list
              class="bg-transparent"
              max-width="300"
              density="compact"
            >
              <v-list-item
                v-for="(item, index) in features" 
                :key="index"
                class="px-0 py-1"
              >
                <template #prepend>
                  <v-icon color="secondary">
                    mdi-check-circle
                  </v-icon>
                </template>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Obter as funcionalidades traduzidas
const { tm, t } = useI18n();
const features = computed(() => tm('plans.features'));

// Gerenciar a quantidade de licenças selecionada
const selectedLicenses = ref(1);

// Funções para incrementar e decrementar licenças
function incrementLicenses() {
  if (selectedLicenses.value < 20) {
    selectedLicenses.value++;
  }
}

function decrementLicenses() {
  if (selectedLicenses.value > 1) {
    selectedLicenses.value--;
  }
}

// Função para calcular o preço baseado na quantidade - sem descontos
function getPrice(qty) {
  const basePrice = 297;
  const totalPrice = basePrice * qty;
  return 'R$ ' + totalPrice.toFixed(2);
}
</script>

<style scoped>
.v-btn-toggle {
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
</style>