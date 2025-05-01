<template>
  <v-container
    id="integracoes"
    fluid
    class="py-10 bg-creme"
  >
    <!-- Título e Subtítulo -->
    <v-row
      justify="center"
      class="mb-8"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-h4 font-weight-bold">
          {{ $t('integrations.title') }}
        </p>
        <p class="text-subtitle-1 font-weight-regular mt-2">
          {{ $t('integrations.subtitle.part1') }}
          <span class="text-secondary">
            {{ $t('integrations.subtitle.highlight') }}
          </span>
          {{ $t('integrations.subtitle.part2') }}
        </p>
      </v-col>
    </v-row>

    <!-- Imagens de Integração -->
    <v-row
      justify="center"
      align="center"
      class="mt-6"
    >
      <v-col
        v-for="(integration, index) in integrations"
        :key="index"
        cols="4"
        md="1"
        class="d-flex justify-center align-center mb-4"
      >
        <v-img
          :src="integration.image"
          alt="Integração"
          max-width="80px"
          max-height="80px"
          class="rounded-circle"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Obter as integrações traduzidas
const { tm } = useI18n();
const integrations = computed(() => tm('integrations.images'));
</script>