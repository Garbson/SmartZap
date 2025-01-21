<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-h3 black-text font-weight-bold">
          {{ $t('functionalities.title') }}
        </p>
      </v-col>
    </v-row>

    <!-- Primeira Row: 6 Cards -->
    <v-row>
      <v-col
        v-for="(feature, i) in features"
        :key="i"
        cols="12"
        md="4"
        lg="4"
        xl="4"
        class="card-container"
      >
        <div
          class="card-wrapper"
          :class="{ flipped: flippedCards[i] }"
          @click="flipCard(i)"
        >
          <!-- Frente do card -->
          <v-card
            class="card-front elevate-2 bg-creme rounded-xl d-flex justify-center align-center flex-column text-center pa-3"
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

          <!-- Verso do card -->
          <v-card
            class="card-back elevate-2 rounded-xl d-flex justify-center align-center flex-column text-center"
            height="200px"
            outlined
          >
            <div class="video-container">
              <video
                src="/testeCorretor.mp4"
                autoplay
                loop
                muted
                class="video-back rounded-xl"
              />
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Configuração do Vue I18n
const { tm } = useI18n();
const features = computed(() => tm('functionalities.features'));

// Controle do estado de "flip" para cada card
const flippedCards = ref(features.value.map(() => false));

const flipCard = (index) => {
  flippedCards.value[index] = !flippedCards.value[index];
};
</script>

<style scoped>
/* Contêiner para o efeito de flip */
.card-container {
  perspective: 1000px; /* Adiciona a perspectiva 3D */
}

.card-wrapper {
  width: 100%;
  height: 200px; /* Altura fixa dos cards */
  position: relative;
  transform-style: preserve-3d; /* Permite transformar frente e verso */
  transition: transform 0.6s;
  cursor: pointer;
}

.card-wrapper.flipped {
  transform: rotateY(180deg); /* Efeito de rotação 3D */
}

/* Frente e verso dos cards */
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Oculta o lado oposto ao girar */
  border-radius: 16px; /* Arredondamento consistente */
}

.card-front {
  z-index: 2;
}

/* Verso do card */
.card-back {
  transform: rotateY(180deg);
  background-color: #333; /* Cor escura para o verso */
  color: white;
  overflow: hidden; /* Garante que o vídeo não ultrapasse os limites */
}

/* Estilo do contêiner do vídeo */
.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilo do vídeo */
.video-back {
  width: 100%;
  height: 100%;
  object-fit: cover !important; /* O vídeo cobre todo o verso */
  border-radius: 16px !important; /* Arredondamento consistente */
}
</style>
