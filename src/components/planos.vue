<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <!-- Título Centralizado -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center mb-8"
      >
        <p class="text-h4 font-weight-bold">
          {{ $t('plans.title') }}
        </p>
        <p class="text-subtitle-1">
          {{ $t('plans.subtitle') }}
        </p>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      align="start"
    >
      <!-- Coluna Esquerda: Lista -->
      <v-col
        cols="12"
        md="5"
      >
        <v-card
          class="elevate-2 pa-6 bg-creme rounded-xl"
          outlined
        >
          <p class="text-h5 font-weight-bold text-center mb-6">
            {{ $t('plans.featuresTitle') }}
          </p>
          <v-list class="bg-creme">
            <v-list-item
              v-for="(item, index) in features"
              :key="index"
              class="d-flex align-center"
            >
              <v-list-item-content>
                <p class="text-body-1">
                  <v-icon
                    color="secondary"
                    class="mr-3"
                  >
                    mdi-check-circle
                  </v-icon>{{ item }}
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Coluna Direita: Cards de Planos -->
      <v-col
        cols="12"
        md="7"
      >
        <v-row>
          <v-col
            v-for="(plan, index) in plans"
            :key="index"
            cols="12"
          >
            <v-card
              class="elevate-2 pa-7 rounded-xl bg-creme"
              outlined
            >
              <v-row>
                <!-- Coluna do Título -->
                <v-col
                  cols="4"
                  class="d-flex align-center justify-center"
                >
                  <p class="font-weight-bold text-center">
                    {{ plan.title }}
                  </p>
                </v-col>

                <!-- Coluna da Imagem -->
                <v-col
                  cols="4"
                  class="d-flex align-center justify-center"
                >
                  <v-img
                    :src="plan.image"
                    alt="Preço do plano"
                    contain
                    class="rounded-xl"
                    max-height="100px"
                  />
                </v-col>

                <!-- Coluna do Botão -->
                <v-col
                  cols="4"
                  class="d-flex align-center justify-center"
                >
                  <v-btn
                    color="secondary"
                    outlined
                    class="rounded-xl"
                    large
                    href="#"
                  >
                    {{ $t('plans.button') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Obter as funcionalidades e os planos traduzidos
const { tm } = useI18n();
const features = computed(() => tm('plans.features'));
const plans = computed(() => tm('plans.planOptions'));
</script>
