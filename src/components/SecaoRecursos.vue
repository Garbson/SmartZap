<template>
  <v-container
    id="recursos"
    fluid
    class="py-10 bg-creme"
  >
    <v-row
      class="mt-md-5"
      justify="center"
    >
      <!-- Coluna do Card -->
      <v-col
        cols="12"
        md="12"
        class="d-flex justify-center"
      >
        <v-card
          class="pa-md-10 pa-mb-0 bg-transparent "
          elevation="0"
          width="100%"
        >
          <v-row
            justify="center"
            align="center"
          >
            <!-- Coluna do Texto -->
            <v-col
              cols="12"
              md="6"
              class="d-flex flex-column justify-center"
            >
              <p class="text-h4 text-md-left text-center font-weight-bold mb-4">
                {{ $t('feature.title') }}
              </p>
              <p class="font-weight-regular text-md-left text-center mb-md-6">
                {{ $t('feature.description') }}
              </p>

              <!-- Botão -->
              <v-btn
                color="secondary"
                class="elevate-2 mt-3 rounded-xl blinking-btn"
                large
                outlined
                href="#"
              >
                {{ $t('feature.button') }}
              </v-btn>
            </v-col>
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
                height="300px"
              />
            </v-col>
          </v-row>
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