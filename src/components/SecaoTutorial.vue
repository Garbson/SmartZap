<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <!-- Primeira Row: Título e Cards -->
    <v-row
      justify="center"
      align="center"
    >
      <!-- Título -->
      <v-col
        cols="12"
        class="text-center mb-8"
      >
        <p class="text-h4 font-weight-bold">
          {{ $t('setup.title') }}
        </p>
      </v-col>

      <!-- Cards -->
      <v-col
        v-for="(step, index) in steps"
        :key="index"
        cols="12"
        md="4"
        class="d-flex justify-center"
      >
        <v-card
          class="rounded-xl pa-6 bg-creme"
          outlined
          width="400px"
          height="220px"
        >
          <div class="d-flex align-center mb-4">
            <div class="number-circle mr-3 bg-secondary">
              {{ step.number }}
            </div>
            <h3 class="text-h5 font-weight-bold">
              {{ step.title }}
            </h3>
          </div>
          <p class="mb-6">
            {{ step.description }}
          </p>
          <v-btn
            v-if="step.button"
            color="secondary"
            outlined
            class="rounded-xl"
            large
            href="#"
          >
            {{ step.button }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Segunda Row: Vídeo do Tutorial -->
    <v-row
      justify="center"
      align="center"
      class="mt-10"
    >
      <v-col
        cols="12"
        md="8"
        class="d-flex justify-center"
      >
        <iframe
          width="98%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="{{ $t('setup.tutorial') }}"
          frameborder="0"
          class="rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Obter os passos traduzidos
const { tm } = useI18n();
const steps = computed(() => tm('setup.steps'));
</script>

<style scoped>
.number-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>