<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <!-- Título Centralizado -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center mb-4"
      >
        <p class="text-h4 font-weight-bold">
          Pague uma vez e utilize o Ano todo
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
          class="elevate-2 pa-6 bg-creme rounded-xl mb-6 d-flex flex-column align-center"
          width="100%"
          outlined
        >
          <div style="border: 2px solid #313841; border-radius: 20px; padding: 50px; width: 700px;">
            <p class="text-h5 font-weight-bold mb-4">
              Licença Premium Anual
            </p>

            <!-- Card interno para selecionar quantidade -->
            <v-card
              class="pa-4 d-flex flex-column mb-6 rounded-xl align-center"
              outlined
            >
              <p class="text-subtitle-1 mb-4">
                Selecione a quantidade de licenças:
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
                    large
                    elevation="2"
                    href="https://chromewebstore.google.com/detail/smartzap/lecapbnkojjbcmpgojanclnilcnemjpk"
                    target="_blank"
                  >
                    {{ $t('plans.button') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>

            <!-- Lista de recursos - Centralizada com texto alinhado à esquerda -->
            <div
              style="width: 300px;"
              class="d-flex flex-column"
            >
              <div 
                v-for="(item, index) in features" 
                :key="index"
                class="d-flex align-start mb-2 text-left"
              >
                <v-icon
                  color="secondary"
                  class="mr-3"
                >
                  mdi-check-circle
                </v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Obter as funcionalidades traduzidas
const { tm } = useI18n();
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