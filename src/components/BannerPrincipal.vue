<template>
  <v-card
    class="pa-10 d-flex justify-center align-center bg-primary"
    height="auto"
    elevation="0"
  >
    <v-row class="justify-center">
      <v-col
        v-scrolls-in
        cols="12"
        md="10"
        lg="8"
        class="d-flex flex-column align-center"
      >
        <!-- Título -->
        <p
          class="text-h4 font-weight-bold text-center mb-6" 
          v-html="$t('bannerPrincipal.title').replace('WhatsApp',`<span class=&quot;text-secondary&quot;>WhatsApp</span>`)"
        />

        <!-- Video/GIF interativo -->
        <div class="rounded-xl border border-gray-300 pa-4 mb-6 text-center position-relative">
          <v-overlay 
            v-if="!videoPlaying" 
            absolute 
            class="d-flex flex-column align-center justify-center"
          >
            <v-btn 
              icon 
              size="x-large"
              class="play-button"
              @click="videoPlaying = true"
            >
              <v-icon
                size="64"
                color="white"
              >
                mdi-play
              </v-icon>
            </v-btn>
            <div class="mt-2 text-subtitle-1">
              {{ $t('bannerPrincipal.watchDemo') }}
            </div>
          </v-overlay>
          <video
            v-if="videoPlaying"
            src="/testeCorretor.mp4"
            controls
            autoplay
            width="80%"
            class="rounded-lg"
          />
          <img
            v-else
            src="/teste.gif"
            alt="Demonstração do SmartZap"
            width="80%"
            class="rounded-lg"
          >
        </div>
        
        <!-- Texto descritivo -->
        <v-card-text
          class="text-h6 text-center mb-4"
          v-html="$t('bannerPrincipal.description').replace('SmartZap', `<span class='text-secondary'>SmartZap</span>`)"
        />
        
        <!-- Indicadores de confiança -->
        <div class="d-flex justify-center flex-wrap align-center mb-6">
          <v-chip
            class="ma-2 text-body-2 bg-surface"
            variant="elevated"
          >
            <template #prepend>
              <v-icon color="amber">
                mdi-star
              </v-icon>
            </template>
            4.8/5 (300+ avaliações)
          </v-chip>
          
          <v-chip
            class="ma-2 text-body-2 bg-surface"
            variant="elevated"
          >
            <template #prepend>
              <v-icon color="success">
                mdi-shield-check
              </v-icon>
            </template>
            {{ $t('bannerPrincipal.dataProtected') }}
          </v-chip>
          
          <v-chip
            class="ma-2 text-body-2 bg-surface"
            variant="elevated"
          >
            <template #prepend>
              <v-icon color="info">
                mdi-account-group
              </v-icon>
            </template>
            +5.000 {{ $t('bannerPrincipal.users') }}
          </v-chip>
        </div>
        
        <!-- Botão CTA melhorado com link da extensão -->
        <v-btn
          href="https://chromewebstore.google.com/detail/smartzap/lecapbnkojjbcmpgojanclnilcnemjpk"
          target="_blank"
          class="rounded-xl bg-secondary text-white mb-4 py-3 px-6 text-body-1 enhanced-btn"
          size="x-large"
          min-width="250"
          elevation="4"
        >
          <v-icon
            left
            class="mr-2"
          >
            mdi-rocket-launch
          </v-icon>
          {{ $t('bannerPrincipal.cta') }}
        </v-btn>
        
        <!-- Garantia de satisfação -->
        <v-chip
          variant="elevated"
          class="mb-6 pa-3"
          color="amber-lighten-5"
        >
          <template #prepend>
            <v-icon color="amber">
              mdi-shield-star
            </v-icon>
          </template>
          {{ $t('bannerPrincipal.guarantee') }}
        </v-chip>
        
        <!-- Texto adicional abaixo do vídeo -->
        <v-card-text class="text-center text-subtitle-1">
          {{ $t('bannerPrincipal.videoCaption') }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

// Controle do vídeo interativo
const videoPlaying = ref(false);

// Dados para demonstração de estatísticas
const stats = ref({
  users: 5000,
  savedHours: 50000,
  satisfaction: 98
});
</script>

<style scoped>
/* Animação para o botão */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(155, 230, 171, 0.5);
  }
}

.enhanced-btn {
  animation: pulse 2s infinite;
  transition: all 0.3s ease;
  font-weight: bold !important;
  letter-spacing: 0.5px !important;
}

.enhanced-btn:hover {
  transform: translateY(-3px) !important;
}

.play-button {
  background: rgba(15, 165, 88, 0.8);
  width: 80px !important;
  height: 80px !important;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: rgba(15, 165, 88, 1);
  transform: scale(1.1);
}
</style>