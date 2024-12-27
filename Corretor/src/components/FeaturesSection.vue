<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <v-row
      justify="center"
      align="center"
    >
      <!-- Coluna da Imagem -->
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <v-img
          src="/teste06.webp"
          alt="Imagem ilustrativa"
          max-width="100%"
          height="400px"
        />
      </v-col>

      <!-- Coluna do Texto -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center"
      >
        <v-card
          class="p-4 bg-transparent"
          elevation="0"
          height="100%"
        >
          <p class="text-h4 text-left font-weight-bold mb-4">
            {{ $t('feature.title') }}
          </p>
          <p class="font-weight-regular text-left mb-md-6">
            {{ $t('feature.description') }}
          </p>
          <v-btn
            color="secondary"
            class="elevate-2 rounded-xl blinking-btn"
            large
            outlined
            href="#"
          >
            {{ $t('feature.button') }}
          </v-btn>
        </v-card>
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

/* Garantir que os cards tenham a mesma altura */
.v-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
