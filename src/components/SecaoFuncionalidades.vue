<template>
  <v-container
    id="funcionalidades"
    fluid
    class="py-10 bg-primary"
  >
    <!-- Título da seção -->
    <v-row
      v-scrolls-in
      justify="center"
    >
      <v-col
        cols="12"
        class="text-center mb-6"
      >
        <p class="text-h3 black-text font-weight-bold">
          {{ $t('functionalities.title') }}
        </p>
      </v-col>
    </v-row>

    <!-- Layout principal -->
    <v-row
      v-scrolls-in
      class="mx-auto"
      style="width: 90%"
    >
      <!-- Coluna do Vídeo (7 colunas) -->
      <v-col
        cols="12"
        md="7"
        class="d-flex flex-column justify-center align-center"
      >
        <div class="video-display rounded-xl overflow-hidden">
          <video
            :src="currentVideo"
            autoplay
            loop
            muted
            controls
            class="feature-video rounded-xl"
          />
        </div>
        <v-btn
          color="secondary"
          x-large
          rounded
          elevation="3"
          class="mt-4 px-8 white--text enhanced-btn"
        >
          {{ $t('cta.tryFree') }}
        </v-btn>
      </v-col>

      <!-- Coluna dos Cards (5 colunas) -->
      <v-col
        cols="12"
        md="5"
      >
        <div class="cards-container">
          <v-card
            v-for="(feature, i) in displayedFeatures"
            :key="i"
            class="mb-3 pa-4 rounded-xl feature-card hover-effect"
            :class="{ 'active-card': selectedCard === i }"
            elevation="2"
            hover
            @click="selectCard(i)"
          >
            <div class="d-flex align-center">
              <v-icon
                size="large"
                color="secondary"
                class="mr-3"
              >
                {{ getIconForFeature(feature.title) }}
              </v-icon>
              <div>
                <p class="text-body-1 font-weight-bold">
                  {{ feature.title }}
                </p>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Seção de demonstração interativa -->
    <v-row
      v-scrolls-in
      class="my-10 justify-center"
    >
      <v-col
        cols="12"
        class="text-center mb-4"
      >
        <p class="text-h4 font-weight-bold">
          Experimente o SmartZap em ação
        </p>
        <p
          class="text-subtitle-1 mx-auto"
          style="max-width: 700px"
        >
          Veja como funciona a conversa automatizada com o SmartZap. Interaja com o chat abaixo para simular uma experiência real.
        </p>
      </v-col>
      
      <v-col 
        cols="12" 
        md="5" 
        class="d-flex justify-center"
      >
        <DemonstracaoInterativa />
      </v-col>
      
      <v-col 
        cols="12" 
        md="5" 
        class="d-flex flex-column justify-center"
      >
        <!-- Card animado chamativo com estatísticas -->
        <v-card
          class="animated-promo-card mb-6 pa-6 text-center"
          elevation="8"
          style="position: relative; overflow: hidden"
        >
          <!-- Efeitos animados em background -->
          <div class="animated-circles">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
          </div>
          
          <h2 class="text-h4 font-weight-bold mb-4">
            <v-icon
              large
              color="secondary"
              class="mr-2 pulse-icon"
            >
              mdi-chart-line
            </v-icon>
            {{ $t('promoCards.results.title') }}
          </h2>
          
          <div class="stats-container">
            <div class="stat-item">
              <div class="stat-value counter">+350%</div>
              <div class="stat-label">{{ $t('promoCards.results.conversions') }}</div>
            </div>
            
            <v-divider vertical class="mx-4 my-2"></v-divider>
            
            <div class="stat-item">
              <div class="stat-value counter">-75%</div>
              <div class="stat-label">{{ $t('promoCards.results.workload') }}</div>
            </div>
            
            <v-divider vertical class="mx-4 my-2"></v-divider>
            
            <div class="stat-item">
              <div class="stat-value counter">+420%</div>
              <div class="stat-label">{{ $t('promoCards.results.roi') }}</div>
            </div>
          </div>
          
          <v-alert
            color="secondary"
            class="mt-4 mb-0 success-alert"
            dense
            text
            border="left"
          >
            <div class="d-flex align-center">
              <v-avatar
                size="36"
                class="mr-3"
              >
                <v-img src="/teste.gif"></v-img>
              </v-avatar>
              <span>{{ $t('promoCards.results.successStory') }}</span>
            </div>
          </v-alert>
        </v-card>
        
        <!-- Contador regressivo para oferta por tempo limitado -->
        <v-card
          class="promotion-card mb-6 pa-6"
          elevation="6"
        >
          <h2 class="text-h5 font-weight-bold mb-3">
            {{ $t('promoCards.offer.title') }}
          </h2>
          
          <p class="mb-4">
            {{ $t('promoCards.offer.description') }} <span class="text-secondary font-weight-bold">{{ $t('promoCards.offer.discount') }}</span>. {{ $t('promoCards.offer.expires') }}:
          </p>
          
          <div class="countdown-timer">
            <div class="time-unit">
              <div class="time-value">
                {{ timer.days }}
              </div>
              <div class="time-label">
                {{ $t('promoCards.offer.timeUnits.days') }}
              </div>
            </div>
            <div class="time-separator">
              :
            </div>
            <div class="time-unit">
              <div class="time-value">
                {{ timer.hours }}
              </div>
              <div class="time-label">
                {{ $t('promoCards.offer.timeUnits.hours') }}
              </div>
            </div>
            <div class="time-separator">
              :
            </div>
            <div class="time-unit">
              <div class="time-value">
                {{ timer.minutes }}
              </div>
              <div class="time-label">
                {{ $t('promoCards.offer.timeUnits.minutes') }}
              </div>
            </div>
            <div class="time-separator">
              :
            </div>
            <div class="time-unit">
              <div class="time-value">
                {{ timer.seconds }}
              </div>
              <div class="time-label">
                {{ $t('promoCards.offer.timeUnits.seconds') }}
              </div>
            </div>
          </div>
          
          <v-btn
            color="secondary"
            class="mt-6 white--text pulse-btn"
            x-large
            block
            elevation="2"
            href="#planos"
          >
            <v-icon left>
              mdi-tag
            </v-icon>
            {{ $t('promoCards.offer.cta') }}
          </v-btn>
          
          <!-- Selos de confiança -->
          <div class="d-flex justify-center mt-4">
            <div class="trust-badge mx-2">
              <v-icon
                color="amber"
                small
              >
                mdi-shield-check
              </v-icon>
              <span class="ml-1">{{ $t('promoCards.offer.securePayment') }}</span>
            </div>
            <div class="trust-badge mx-2">
              <v-icon
                color="green"
                small
              >
                mdi-check-circle
              </v-icon>
              <span class="ml-1">{{ $t('promoCards.offer.guarantee') }}</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import DemonstracaoInterativa from './DemonstracaoInterativa.vue';

// Configuração do i18n
const { tm } = useI18n();
const allFeatures = computed(() => {
  // Pegando apenas os 9 primeiros recursos
  return tm('functionalities.features').slice(0, 9);
});

// Vídeos associados a cada feature
const videoMap = ref({
  0: '/testeCorretor.mp4',
  1: '/testeCorretor.mp4',
  2: '/testeCorretor.mp4',
  3: '/testeCorretor.mp4',
  4: '/testeCorretor.mp4',
  5: '/testeCorretor.mp4',
  6: '/testeCorretor.mp4',
  7: '/testeCorretor.mp4',
  8: '/testeCorretor.mp4'
});

// Controle do card selecionado
const selectedCard = ref(0);

// Features a serem exibidas (limitado a 9)
const displayedFeatures = computed(() => {
  return allFeatures.value;
});

// Vídeo atual baseado no card selecionado
const currentVideo = computed(() => {
  return videoMap.value[selectedCard.value] || videoMap.value[0];
});

// Temporizador de contagem regressiva
const timer = ref({
  days: '07',
  hours: '23',
  minutes: '59',
  seconds: '59'
});

let countdown = null;

// Data limite (7 dias a partir de agora)
const getEndDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
};

const endDate = getEndDate();

// Atualizar temporizador
const updateTimer = () => {
  const now = new Date();
  const diff = endDate - now;
  
  if (diff <= 0) {
    // Tempo expirado, redefine para 7 dias
    Object.assign(endDate, getEndDate());
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  timer.value = {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0')
  };
};

function selectCard(index) {
  selectedCard.value = index;
}

// Função para determinar o ícone adequado com base no título da funcionalidade
function getIconForFeature(title) {
  const iconMap = {
    'ChatBot': 'mdi-message-text',
    'CRM Kanban': 'mdi-view-dashboard',
    'Analytics': 'mdi-chart-bar',
    'Automação de Mensagens': 'mdi-robot',
    'Multiusuário': 'mdi-account-group',
    'Disparo em Massa': 'mdi-send-clock',
    'Lembretes': 'mdi-bell',
    'Mensagens rápidas': 'mdi-send-check',
    'Etiquetas': 'mdi-tag',
    'Anotações separadas por contato': 'mdi-note-text',
    'Salvar contatos automaticamente': 'mdi-account-plus',
    'Abas': 'mdi-tab',
    'Exportar contatos': 'mdi-export',
    'Integração com ChatGPT': 'mdi-robot-happy',
    'Rastrear encomendas por contato': 'mdi-package-variant-closed',
    // Versões em inglês
    'Message Automation': 'mdi-robot',
    'Mass Messaging': 'mdi-send-clock',
    'Quick Messages': 'mdi-send-check',
    'Labels': 'mdi-tag',
    'Contact-Specific Notes': 'mdi-note-text',
    'Auto-Save Contacts': 'mdi-account-plus',
    'Tabs': 'mdi-tab',
    'Export Contacts': 'mdi-export',
    'ChatGPT Integration': 'mdi-robot-happy',
    'Track Orders by Contact': 'mdi-package-variant-closed',
    // Versões em espanhol
    'Automatización de Mensajes': 'mdi-robot',
    'Mensajes Masivos': 'mdi-send-clock',
    'Mensajes Rápidos': 'mdi-send-check',
    'Etiquetas': 'mdi-tag',
    'Notas por Contacto': 'mdi-note-text',
    'Guardar Contactos Automáticamente': 'mdi-account-plus',
    'Pestañas': 'mdi-tab',
    'Exportar Contactos': 'mdi-export',
    'Integración con ChatGPT': 'mdi-robot-happy',
    'Rastrear Pedidos por Contacto': 'mdi-package-variant-closed',
  };

  return iconMap[title] || 'mdi-star'; // Ícone padrão caso não encontre
}

onMounted(() => {
  // Iniciar temporizador de contagem regressiva
  updateTimer();
  countdown = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  // Limpar temporizador
  if (countdown) {
    clearInterval(countdown);
  }
});
</script>

<style scoped>
/* Estilos para o vídeo */
.video-display {
  width: 100%;
  height: 550px; /* Aumentei a altura do vídeo */
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.feature-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilos para os cards */
.cards-container {
  height: auto; /* Removendo max-height para evitar scrollbar */
  overflow-y: visible; /* Removendo a rolagem */
  padding-right: 10px;
}

.feature-card {
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 4px solid transparent;
  margin-bottom: 14px; /* Aumentando levemente o espaçamento entre cards */
}

.feature-card:hover {
  transform: translateX(5px);
  background-color: rgba(255, 255, 255, 0.05);
}

.active-card {
  border-left: 4px solid #0FA558;
  background-color: rgba(15, 165, 88, 0.1);
}

.enhanced-btn {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.enhanced-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(15, 165, 88, 0.3);
}

/* Estilos para o card de promoção */
.promotion-card {
  background: linear-gradient(145deg, #313841, #252a31);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.promotion-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(15, 165, 88, 0.1) 0%, rgba(49, 56, 65, 0) 70%);
  z-index: 0;
  animation: shine 15s linear infinite;
}

@keyframes shine {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.countdown-timer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
}

.time-value {
  background-color: #0FA558;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 8px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.time-label {
  font-size: 0.8rem;
  margin-top: 5px;
  color: #ccc;
}

.time-separator {
  font-size: 2rem;
  font-weight: bold;
  margin-top: -10px;
}

/* Pulsar botão */
.pulse-btn {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(15, 165, 88, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(15, 165, 88, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(15, 165, 88, 0);
  }
}

/* Selos de confiança */
.trust-badge {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8rem;
}

/* Estilos para o card animado */
.animated-promo-card {
  background: linear-gradient(145deg, #313841, #252a31);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.animated-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(15, 165, 88, 0.2);
  animation: circle-animation 10s infinite;
}

.circle-1 {
  width: 150px;
  height: 150px;
  top: 20%;
  left: 30%;
}

.circle-2 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 70%;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 80%;
  left: 40%;
}

@keyframes circle-animation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #0FA558;
}

.stat-label {
  font-size: 0.8rem;
  color: #ccc;
}

.success-alert {
  background-color: rgba(15, 165, 88, 0.1);
  border-left: 4px solid #0FA558;
}

.pulse-icon {
  animation: pulse-animation 2s infinite;
}
</style>