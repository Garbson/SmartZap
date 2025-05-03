<template>
  <v-card
    class="pa-10 d-flex justify-center align-center bg-primary overflow-hidden"
    height="auto"
    elevation="0"
  >
    <v-row class="justify-center">
      <v-col cols="12" md="12" lg="12" class="d-flex flex-column align-center">
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

        <!-- Layout dinâmico com fluxos de energia -->
        <div class="feature-layout">
          <!-- Vídeo no centro -->
          <div class="video-center-container">
            <div class="energy-core" />
            <video
              ref="videoElement"
              src="https://res.cloudinary.com/dvuwndt7x/video/upload/v1746230966/videoPrincipal_dxpvuw.mp4"
              controls
              class="video-principal-center"
              preload="auto"
              controlsList="nodownload"
              playsinline
            />
            <v-btn
              href="https://chromewebstore.google.com/detail/smartzap/lecapbnkojjbcmpgojanclnilcnemjpk"
              target="_blank"
              class="rounded-xl bg-secondary text-white mt-4 py-3 px-6 text-body-1 enhanced-btn"
              size="x-large"
              min-width="250"
              elevation="4"
            >
              <v-icon left class="mr-2"> mdi-rocket-launch </v-icon>
              {{ $t("bannerPrincipal.cta") }}
            </v-btn>

            <!-- Indicadores de confiança logo abaixo do botão -->
            <div
              class="d-flex justify-center flex-wrap align-center mt-3 mb-2 chip-container"
            >
              <v-chip
                class="ma-1 text-body-2 bg-surface"
                variant="elevated"
                size="small"
              >
                <template #prepend>
                  <v-icon color="success" size="small">
                    mdi-shield-check
                  </v-icon>
                </template>
                {{ $t("bannerPrincipal.dataProtected") }}
              </v-chip>
              <v-chip
                class="ma-1 text-body-2 bg-surface"
                variant="elevated"
                size="small"
              >
                <template #prepend>
                  <v-icon color="info" size="small"> mdi-account-group </v-icon>
                </template>
                +5.000 {{ $t("bannerPrincipal.users") }}
              </v-chip>

              <v-chip
                class="ma-1 text-body-2 bg-surface"
                variant="elevated"
                size="small"
              >
                <template #prepend>
                  <v-icon color="blue" size="small"> mdi-refresh </v-icon>
                </template>
                Atualizações mensais
              </v-chip>
            </div>
          </div>

          <!-- Cards espalhados -->
          <div id="card1" ref="card1" class="feature-card top-left">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Automação Inteligente</h3>
          </div>

          <div id="card2" ref="card2" class="feature-card top-right">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Aumento de Produtividade</h3>
          </div>

          <div id="card3" ref="card3" class="feature-card middle-left">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Gestão de Contatos</h3>
          </div>

          <div id="card4" ref="card4" class="feature-card middle-right">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Integração Perfeita</h3>
          </div>

          <div id="card5" ref="card5" class="feature-card bottom-left">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Mensagens Programadas</h3>
          </div>

          <div id="card6" ref="card6" class="feature-card bottom-right">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Segurança Garantida</h3>
          </div>

          <div id="card7" ref="card7" class="feature-card far-left">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Relatórios Detalhados</h3>
          </div>

          <div id="card8" ref="card8" class="feature-card far-right">
            <div class="card-connector" />
            <h3 class="text-h5 text-secondary">Suporte Multilingue</h3>
          </div>

          <!-- SVG para as cordas -->
          <svg class="connection-svg">
            <path id="path1" class="rope-path rope-style-1" d="" />
            <path id="path2" class="rope-path rope-style-2" d="" />
            <path id="path3" class="rope-path rope-style-3" d="" />
            <path id="path4" class="rope-path rope-style-1" d="" />
            <path id="path5" class="rope-path rope-style-2" d="" />
            <path id="path6" class="rope-path rope-style-3" d="" />
            <path id="path7" class="rope-path rope-style-1" d="" />
            <path id="path8" class="rope-path rope-style-2" d="" />
          </svg>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

// Controle do vídeo interativo
const videoPlaying = ref(false);
const videoElement = ref(null);

// Referências para os cards
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);
const card7 = ref(null);
const card8 = ref(null);

// Dados para demonstração de estatísticas
const stats = ref({
  users: 5000,
  savedHours: 50000,
  satisfaction: 98,
});

// Função para criar caminhos SVG curvados (em forma de corda)
const createRopePath = (startX, startY, endX, endY, curvature = 30) => {
  // Ponto de controle para a curva
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2 - curvature;

  // Retorna o path SVG para uma curva bezier
  return `M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`;
};

// Atualiza os caminhos das cordas
const updateRopePaths = () => {
  if (!videoElement.value) return;

  const cards = [
    card1.value,
    card2.value,
    card3.value,
    card4.value,
    card5.value,
    card6.value,
    card7.value,
    card8.value,
  ];
  const videoRect = videoElement.value.getBoundingClientRect();
  const videoCenter = {
    x: videoRect.left + videoRect.width / 2,
    y: videoRect.top + videoRect.height / 2,
  };

  // Atualiza cada caminho
  cards.forEach((card, i) => {
    if (!card) return;

    // Encontra o conector dentro do card
    const connector = card.querySelector(".card-connector");
    if (!connector) return;

    const connectorRect = connector.getBoundingClientRect();
    const connectorCenter = {
      x: connectorRect.left + connectorRect.width / 2,
      y: connectorRect.top + connectorRect.height / 2,
    };

    // Ajusta para coordenadas SVG relativas
    const featureLayout = document.querySelector(".feature-layout");
    const layoutRect = featureLayout.getBoundingClientRect();

    const startX = videoCenter.x - layoutRect.left;
    const startY = videoCenter.y - layoutRect.top;
    const endX = connectorCenter.x - layoutRect.left;
    const endY = connectorCenter.y - layoutRect.top;

    // Cria o caminho da corda
    const path = document.getElementById(`path${i + 1}`);
    if (path) {
      // Calcula curvatura baseada na distância
      const distance = Math.sqrt(
        Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
      );
      const curvature = distance * 0.2; // 20% da distância

      path.setAttribute(
        "d",
        createRopePath(startX, startY, endX, endY, curvature)
      );
    }
  });
};

// Adiciona animação suave para cards
const animateCards = () => {
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 200); // Atraso progressivo para cada card
  });
};

// Inicializa e limpa os event listeners
onMounted(() => {
  // Atualiza as cordas quando o componente é montado
  setTimeout(() => {
    updateRopePaths();
    animateCards();
  }, 500);

  // Atualiza as cordas quando a janela é redimensionada
  window.addEventListener("resize", updateRopePaths);

  // Atualiza periodicamente para garantir que as cordas estejam sempre conectadas
  const interval = setInterval(updateRopePaths, 2000);

  // Limpa o intervalo quando o componente é desmontado
  onUnmounted(() => {
    window.removeEventListener("resize", updateRopePaths);
    clearInterval(interval);
  });
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

/* Layout dinâmico */
.feature-layout {
  position: relative;
  width: 100%;
  height: 800px;
  max-width: 1400px;
  margin: 0 auto;
  overflow: visible;
}

/* Centro do vídeo */
.video-center-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
}

.video-principal-center {
  width: auto;
  height: 500px;
  max-height: 70vh;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  z-index: 5;
}

/* Efeito de energia central */
.energy-core {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(76, 175, 80, 0.6) 0%,
    rgba(76, 175, 80, 0) 70%
  );
  animation: pulse-core 4s infinite;
  z-index: 4;
}

@keyframes pulse-core {
  0%,
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

/* SVG para as cordas */
.connection-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.rope-path {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  filter: drop-shadow(0 0 3px rgba(76, 175, 80, 0.5));
}

/* Estilos variados de cordas */
.rope-style-1 {
  stroke: rgba(76, 175, 80, 0.7);
  stroke-dasharray: 5, 10;
  animation: dash 30s linear infinite;
  filter: drop-shadow(0 0 3px rgba(76, 175, 80, 0.5));
}

.rope-style-2 {
  stroke: rgba(76, 175, 80, 0.6);
  stroke-dasharray: 10, 15;
  animation: dash 25s linear infinite reverse;
  filter: drop-shadow(0 0 3px rgba(76, 175, 80, 0.5));
}

.rope-style-3 {
  stroke: rgba(76, 175, 80, 0.8);
  stroke-dasharray: 3, 6, 12;
  animation: dash 35s linear infinite;
  filter: drop-shadow(0 0 3px rgba(76, 175, 80, 0.5));
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}

@keyframes pulse-connector {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
  50% {
    transform: scale(1.5);
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.8);
  }
}

/* Cards de recursos */
.feature-card {
  position: absolute;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 3;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.feature-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.feature-card:hover {
  transform: translateY(-5px) scale(1.05);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Conector do card */
.card-connector {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(76, 175, 80, 0.7);
  border-radius: 50%;
  z-index: 4;
  animation: pulse-connector 3s infinite;
}

/* Posicionamento dos conectores com base na posição do card */
.top-left .card-connector {
  bottom: 10px;
  right: 10px;
}

.top-right .card-connector {
  bottom: 10px;
  left: 10px;
}

.middle-left .card-connector {
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}

.middle-right .card-connector {
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}

.bottom-left .card-connector {
  top: 10px;
  right: 10px;
}

.bottom-right .card-connector {
  top: 10px;
  left: 10px;
}

.far-left .card-connector {
  top: 15px;
  right: 15px;
}

.far-right .card-connector {
  top: 15px;
  left: 15px;
}

/* Posições dos cards - mais afastados do vídeo */
.top-left {
  top: 10%;
  left: 8%;
}

.top-right {
  top: 10%;
  right: 8%;
}

.middle-left {
  top: 40%;
  left: 3%;
}

.middle-right {
  top: 40%;
  right: 3%;
}

.bottom-left {
  bottom: 10%;
  left: 8%;
}

.bottom-right {
  bottom: 10%;
  right: 8%;
}

.far-left {
  top: 65%;
  left: 5%;
}

.far-right {
  top: 65%;
  right: 5%;
}

/* Cordas individuais */
.rope {
  position: absolute;
  z-index: 2;
}

/* Texto explicativo */
.max-width-text {
  max-width: 800px;
  line-height: 1.6;
}

/* Media query para dispositivos móveis */
@media (max-width: 960px) {
  .feature-layout {
    height: auto;
    margin-bottom: 4rem;
  }

  .video-center-container {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    margin-bottom: 2rem;
  }

  .video-principal-center {
    height: auto;
    max-height: 500px;
    width: 80% !important;
  }

  .feature-card {
    position: relative;
    width: 80%;
    max-width: 300px;
    margin: 1rem auto;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    opacity: 1;
    transform: none;
  }

  .connection-svg,
  .energy-core,
  .rope {
    display: none;
  }
}
</style>
