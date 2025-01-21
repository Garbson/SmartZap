<template>
  <v-container
    fluid
    class="py-10 bg-creme"
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
        <v-row
          class="testimonial-container"
          justify="center"
          align="center"
        >
          <!-- Exibir 3 imagens ao mesmo tempo -->
          <v-col
            v-for="(testimonial, index) in displayedTestimonials"
            :key="index"
            cols="4"
            class="d-flex justify-center"
          >
            <v-img
              :src="testimonial.image"
              alt="Cliente"
              max-width="100%"
              height="100%"
              contain
              class="rounded testimonial-image rounded-lg"
              :class="{
                'active': index === 1, // Imagem do meio
                'left': index === 0, // Imagem à esquerda
                'right': index === 2 // Imagem à direita
              }"
            />
          </v-col>
        </v-row>
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
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Controlar o índice do carrossel
const currentIndex = ref(0);

// Use o Vue I18n para carregar os textos e imagens traduzidos
const { tm } = useI18n();

// Obter imagens traduzidas
const testimonials = computed(() => tm('testimonials.images'));

// Controlar as imagens que serão exibidas (três imagens)
const displayedTestimonials = computed(() => {
  const total = testimonials.value.length;
  return [
    testimonials.value[(currentIndex.value) % total],  // Imagem 1
    testimonials.value[(currentIndex.value + 1) % total],  // Imagem 2 (do meio)
    testimonials.value[(currentIndex.value + 2) % total],  // Imagem 3
  ];
});

// Mudar as imagens automaticamente para criar o efeito cíclico
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  }, 3000);  // Troca de imagem a cada 3 segundos
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

/* Estilo para o efeito do carrossel */
.testimonial-image {
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0.5;
  transform: scale(0.8);
}

/* Imagem do meio */
.testimonial-image.active {
  opacity: 1;
  transform: scale(1);
}

/* Imagens laterais */
.testimonial-image.left,
.testimonial-image.right {
  opacity: 0.6;
  transform: scale(0.85);
}

/* Ajuste do carrossel */
.testimonial-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
}
</style>
