<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <v-row
      class="mt-5 mx-auto"
      justify="center"
      align="center"
      style="width: 80% !important; "
    >
      <!-- Coluna do Texto (Topo) -->
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <p class="text-h5  text-center font-weight-bold mb-4">
          {{ $t('feature.title') }}
        </p>
      </v-col>

      <!-- Coluna do Vídeo -->
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <v-responsive
          :aspect-ratio="16 / 9"
          class="mb-4"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-100 h-100"
          />
        </v-responsive>
      </v-col>

      <!-- Coluna do Texto (Parte Inferior) -->
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <p class="font-weight-regular text-center">
          {{ $t('feature.description') }}
        </p>
      </v-col>

      <!-- Coluna do Botão -->
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <v-btn
          color="secondary"
          class="elevate-2 rounded-xl blinking-btn"
          large
          outlined
          href="#"
        >
          {{ $t('feature.button') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
/* Botão piscando */
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

/* Garantir que os vídeos sejam responsivos */
.v-responsive {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Proporção 16:9 */
  height: 0;
  overflow: hidden;
}

.v-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
