<template>
  <v-container
    fluid
    class="py-10 bg-primary"
  >
    <!-- Título da seção -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center mb-6"
      >
        <p class="text-h3 black-text font-weight-bold">
          {{ $t('functionalities.title') }}
        </p>
      </v-col>
    </v-row>

    <!-- Layout principal: uma row com duas colunas (7-5) -->
    <v-row
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
          class="mt-4 px-8 white--text try-free-btn"
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
            class="mb-3 pa-4 rounded-xl feature-card"
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
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

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

/* Removendo estilos da scrollbar que não será mais usada */

.try-free-btn {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.try-free-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(15, 165, 88, 0.3);
}
</style>