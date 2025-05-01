<template>
  <v-container
    id="faq"
    fluid
    class="py-10 bg-creme"
  >
    <v-row>
      <!-- Coluna Esquerda: Título e Subtítulo -->
      <v-col
        cols="12"
        md="5"
        class="text-left justify-center"
      >
        <p class="text-h4 font-weight-bold mb-2">
          {{ $t('faqs.title') }}
        </p>
        <p class="text-subtitle-1">
          {{ $t('faqs.subtitle') }}
        </p>
      </v-col>

      <!-- Coluna Direita: Perguntas Frequentes -->
      <v-col
        cols="12"
        md="7"
      >
        <v-row>
          <v-col
            v-for="(faq, index) in questions"
            :key="index"
            cols="12"
            class="mb-1"
          >
            <v-expansion-panels>
              <v-expansion-panel
                class="pa-5 rounded-xl"
                style="background: linear-gradient(to right, #313841, #0FA558);"
              >
                <v-expansion-panel-title>
                  <p class="text-body-1 font-weight-bold">
                    {{ faq.question }}
                  </p>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p>{{ faq.answer }}</p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Call-to-Action -->
    <v-row
      justify="center"
      class="mt-10"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-h5 font-weight-bold mb-2">
          {{ $t('faqs.ctaTitle') }}
        </p>
        <p class="text-subtitle-1 mb-6">
          {{ $t('faqs.ctaSubtitle') }}
        </p>
        <v-btn
          color="secondary"
          outlined
          class="rounded-xl"
          large
          href="#"
        >
          {{ $t('faqs.ctaButton') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Obter as perguntas traduzidas
const { tm } = useI18n();
const questions = computed(() => tm('faqs.questions'));
</script>