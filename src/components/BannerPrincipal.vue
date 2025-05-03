<template>
  <v-card
    class="pa-10 d-flex justify-center align-center bg-primary"
    height="auto"
    elevation="0"
  >
    <v-row class="justify-center">
      <v-col cols="12" md="10" lg="10" class="d-flex flex-column align-center">
        <!-- Título -->
        <p
          class="text-h4 font-weight-bold text-center mb-6"
          v-html="
            $t('bannerPrincipal.title').replace(
              'WhatsApp',
              `<span class=&quot;text-secondary&quot;>WhatsApp</span>`
            )
          "
        />

        <!-- Layout em duas colunas para vídeo e conteúdo -->
        <v-row class="align-stretch w-100">
          <!-- Coluna do vídeo à esquerda -->
          <v-col
            cols="12"
            md="5"
            lg="4"
            class="d-flex align-center justify-center"
          >
            <div class="video-container-portrait">
              <video
                src="https://res.cloudinary.com/dvuwndt7x/video/upload/v1746230966/videoPrincipal_dxpvuw.mp4"
                controls
                class="video-principal-portrait"
                preload="auto"
                controlsList="nodownload"
                playsinline
              />
            </div>
          </v-col>

          <!-- Coluna do conteúdo à direita -->
          <v-col
            cols="12"
            md="7"
            lg="8"
            class="d-flex flex-column justify-center"
          >
            <!-- Texto descritivo -->
            <v-card-text
              class="text-h6 text-center text-md-left mb-2 pa-2"
              v-html="
                $t('bannerPrincipal.description').replace(
                  'SmartZap',
                  `<span class='text-secondary'>SmartZap</span>`
                )
              "
            />

            <!-- Indicadores de confiança -->
            <div
              class="d-flex flex-wrap justify-center justify-md-start align-center mb-4 pa-2 mt-0"
            >
              <v-chip class="ma-2 text-body-2 bg-surface" variant="elevated">
                <template #prepend>
                  <v-icon color="amber"> mdi-star </v-icon>
                </template>
                4.8/5 (300+ avaliações)
              </v-chip>

              <v-chip class="ma-2 text-body-2 bg-surface" variant="elevated">
                <template #prepend>
                  <v-icon color="success"> mdi-shield-check </v-icon>
                </template>
                {{ $t("bannerPrincipal.dataProtected") }}
              </v-chip>

              <v-chip class="ma-2 text-body-2 bg-surface" variant="elevated">
                <template #prepend>
                  <v-icon color="info"> mdi-account-group </v-icon>
                </template>
                +5.000 {{ $t("bannerPrincipal.users") }}
              </v-chip>
            </div>

            <!-- Botão CTA melhorado -->
            <div class="d-flex justify-center justify-md-start pa-2 pt-0">
              <v-btn
                href="https://chromewebstore.google.com/detail/smartzap/lecapbnkojjbcmpgojanclnilcnemjpk"
                target="_blank"
                class="rounded-xl bg-secondary text-white mb-4 py-3 px-6 text-body-1 enhanced-btn"
                size="x-large"
                min-width="250"
                elevation="4"
              >
                <v-icon left class="mr-2"> mdi-rocket-launch </v-icon>
                {{ $t("bannerPrincipal.cta") }}
              </v-btn>
            </div>

            <!-- Texto adicional -->
            <v-card-text class="text-center text-md-left text-subtitle-1 pa-2">
              {{ $t("bannerPrincipal.videoCaption") }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

// Controle do vídeo interativo
const videoPlaying = ref(false);

// Dados para demonstração de estatísticas
const stats = ref({
  users: 5000,
  savedHours: 50000,
  satisfaction: 98,
});
</script>

<style scoped>
/* Animação para o botão */
@keyframes pulse {
  0%,
  100% {
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

/* Estilos específicos para garantir que o vídeo seja exibido corretamente */
.video-principal {
  min-height: 500px;
  max-height: 100vh;
  width: 95% !important; /* Aumentado para 95% da largura disponível */
  max-width: 1400px; /* Aumentado o tamanho máximo */
  display: block;
  margin: 0 auto;
  background-color: transparent; /* Removido o fundo preto */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  object-fit: cover; /* Alterado para cover para preencher todo o espaço */
}

.video-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.text-content-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

/* Estilos específicos para o vídeo no formato vertical/retrato */
.video-principal-portrait {
  height: 600px;
  max-height: 80vh;
  width: auto !important;
  display: block;
  margin: 0 auto;
  background-color: transparent;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  object-fit: contain;
}

.video-container-portrait {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media query para dispositivos móveis */
@media (max-width: 960px) {
  .video-container-portrait {
    background: transparent;
    box-shadow: none;
    width: 100%;
    padding: 0 !important;
    margin-bottom: 2rem;
  }

  .video-principal-portrait {
    height: auto;
    max-height: 500px;
    width: 80% !important;
    box-shadow: none;
  }

  .text-md-left {
    text-align: center !important;
  }

  .justify-md-start {
    justify-content: center !important;
  }
}
</style>
