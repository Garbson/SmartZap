<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <!-- Título -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-h4 font-weight-bold">
          {{ $t('testimonials.title') }}
        </p>
      </v-col>
    </v-row>

    <!-- Carrossel de Opiniões -->
    <v-row
      justify="center"
      class="mt-6"
    >
      <v-col cols="12">
        <v-carousel
          cycle
          hide-delimiters
          height="300"
          :show-arrows="false"
          class="pa-4"
        >
          <!-- Cada slide contém 3 imagens -->
          <v-carousel-item
            v-for="(group, index) in groupedTestimonials"
            :key="index"
            class="px-1"
          >
            <v-row
              justify="center"
              align="center"
            >
              <v-col
                v-for="(testimonial, i) in group"
                :key="i"
                cols="4"
                class="d-flex justify-center"
              >
                <v-img
                  :src="testimonial.image"
                  alt="Cliente"
                  max-width="100%"
                  height="100%"
                  contain
                  class="rounded"
                />
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Pergunta e Botão -->
    <v-row
      justify="center"
      align="center"
      class="mt-10"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-h5 font-weight-bold">
          {{ $t('testimonials.question') }}
        </p>
        <v-btn
          color="secondary"
          class="elevate-2 rounded-xl blinking-btn mt-4"
          large
          outlined
          href="#"
        >
          {{ $t('testimonials.button') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Use o Vue I18n para carregar os textos e imagens traduzidos
const { tm } = useI18n();

// Obter imagens traduzidas
const testimonials = computed(() => tm('testimonials.images'));

// Agrupar as imagens em grupos de 3
const groupedTestimonials = computed(() => {
  return testimonials.value.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!result[groupIndex]) result[groupIndex] = [];
    result[groupIndex].push(item);
    return result;
  }, []);
});
</script>

<style scoped>
/* Apenas CSS necessário */
.blinking-btn {
  animation: blinking 1s infinite;
}

@keyframes blinking {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
