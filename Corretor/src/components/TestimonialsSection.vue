<template>
  <v-container
    fluid
    class="py-10 bg-creme"
  >
    <!-- Primeira Row: Título -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center"
      >
        <h2 class="text-h2 black-text font-weight-bold">
          {{ $t('functionalities.title') }}
        </h2>
      </v-col>
    </v-row>

    <!-- Primeira Row: 6 Cards -->
    <v-row>
      <v-col
        v-for="(feature, i) in features"
        :key="i"
        cols="12"
        md="4"
      >
        <v-card
          class="elevate-2 bg-primary rounded-xl d-flex justify-center align-center flex-column text-center"
          height="200px"
          outlined
        >
          <p class="text-h5 font-weight-bold">
            {{ feature.title }}
          </p>
          <p>
            {{ feature.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Configuração do Vue I18n
const { tm } = useI18n();


const features = computed(() => tm('functionalities.features'));
</script>
