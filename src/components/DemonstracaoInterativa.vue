<template>
  <div class="demo-chat-container">
    <v-card
      class="chat-card"
      theme="dark"
      elevation="10"
    >
      <!-- Cabeçalho do chat parecido com WhatsApp -->
      <v-card-title class="chat-header">
        <div class="d-flex align-center">
          <v-avatar
            color="#25D366"
            size="40"
            class="mr-3"
          >
            <v-img
              src="/logo.png"
              alt="SmartZap Logo"
            />
          </v-avatar>
          <div>
            <div class="d-flex align-center text-subtitle-1 font-weight-bold">
              {{ title }}
              <v-chip
                class="ml-2"
                color="#25D366"
                size="small"
                label
              >
                <span class="text-caption">{{ status }}</span>
              </v-chip>
            </div>
            <div class="text-caption">
              <v-icon
                size="x-small"
                color="#25D366"
                class="mr-1"
              >
                mdi-circle
              </v-icon>
              Online agora
            </div>
          </div>
        </div>
      </v-card-title>

      <v-divider />

      <!-- Área das mensagens com fundo parecido com WhatsApp -->
      <v-card-text
        ref="chatContainer"
        class="chat-messages"
      >
        <div class="messages-container">
          <template
            v-for="(message, index) in currentMessages"
            :key="index"
          >
            <div :class="['message', message.type === 'sent' ? 'message-sent' : 'message-received']">
              <div class="message-bubble">
                <div
                  class="message-text"
                  v-html="formatMessage(message.text)"
                />
                <div class="message-time">
                  {{ message.time }}
                  <v-icon
                    v-if="message.type === 'sent'"
                    size="x-small"
                    color="white"
                    class="ml-1"
                  >
                    mdi-check-all
                  </v-icon>
                </div>
              </div>
            </div>
          </template>
          <div
            v-if="isTyping"
            class="message message-received"
          >
            <div class="message-bubble">
              <div class="message-text">
                ...
              </div>
            </div>
          </div>
        </div>
      </v-card-text>

      <!-- Botão de teste quando necessário -->
      <div
        v-if="currentStep && currentStep.showTrial"
        class="trial-button-container"
      >
        <v-btn
          color="#25D366"
          variant="elevated"
          size="large"
          class="px-6"
          block
        >
          {{ tryFree }}
        </v-btn>
      </div>

      <!-- Opções de mensagem em botões -->
      <div
        v-if="currentStep && currentStep.options && currentStep.options.length"
        class="chat-options"
      >
        <v-btn
          v-for="(option, index) in currentStep.options"
          :key="index"
          variant="outlined"
          color="#0FA558"
          class="option-button mb-2"
          @click="selectOption(option)"
        >
          {{ option.text }}
        </v-btn>
      </div>

      <v-divider />

      <!-- Campo de entrada de mensagem -->
      <v-card-actions class="chat-input">
        <v-text-field
          v-model="userInput"
          :placeholder="placeholder"
          variant="outlined"
          density="compact"
          hide-details
          :disabled="!currentStep?.allowInput"
          prepend-inner-icon="mdi-emoticon-outline"
          class="message-input"
          @keyup.enter="sendMessage"
        >
          <template #append>
            <v-btn
              :disabled="!userInput.trim() || !currentStep?.allowInput"
              color="#25D366"
              variant="text"
              class="px-2"
              @click="sendMessage"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-card-actions>

      <!-- Rodapé com opção para reiniciar -->
      <div class="restart-container">
        <v-btn
          variant="text"
          size="small"
          color="grey"
          @click="restartDemo"
        >
          <v-icon
            small
            class="mr-1"
          >
            mdi-refresh
          </v-icon>
          {{ restart }}
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();
const chatContainer = ref(null);
const userInput = ref('');
const currentStepKey = ref('welcome');
const isTyping = ref(false);

// Adicionar as propriedades computadas para as traduções
const title = computed(() => t('demo.title'));
const status = computed(() => t('demo.status'));
const tryFree = computed(() => t('cta.tryFree'));
const placeholder = computed(() => t('demo.placeholder'));
const restart = computed(() => t('demo.restart'));
const chooseOption = computed(() => t('demo.chooseOption'));

// Acessar dados de conversa usando tm para arrays
const allConversationSteps = computed(() => {
  return tm('demo.conversation') || [];
});

// Buscar o passo atual com base na chave
const currentStep = computed(() => {
  if (!allConversationSteps.value || allConversationSteps.value.length === 0) {
    return null;
  }
  return allConversationSteps.value.find(step => step.step === currentStepKey.value) || allConversationSteps.value[0];
});

// Mensagens do passo atual
const currentMessages = ref([]);

// Inicializar a demonstração
onMounted(() => {
  initializeDemo();
});

// Observar mudanças no passo atual e nas mensagens para sempre fazer scroll
watch(currentStepKey, () => {
  showTypingIndicator();
});

// Observar quando novas mensagens são adicionadas
watch(currentMessages, () => {
  scrollToBottom();
}, { deep: true });

// Observar o estado de digitação
watch(isTyping, () => {
  scrollToBottom();
});

// Mostra o indicador "digitando..." e depois atualiza as mensagens
function showTypingIndicator() {
  isTyping.value = true;
  
  // Simular tempo de digitação (entre 1 e 3 segundos)
  const typingTime = Math.floor(Math.random() * 2000) + 1000;
  
  setTimeout(() => {
    isTyping.value = false;
    updateMessages();
  }, typingTime);
}

function initializeDemo() {
  currentStepKey.value = 'welcome';
  showTypingIndicator();
}

function updateMessages() {
  const step = currentStep.value;
  if (step && step.messages) {
    currentMessages.value = [...step.messages];
  }
}

function selectOption(option) {
  // Adicionar a mensagem selecionada
  const selectedMessage = {
    type: 'sent',
    text: option.text,
    time: getCurrentTime()
  };
  
  currentMessages.value = [...currentMessages.value, selectedMessage];
  
  // Esperar um momento antes de mostrar a próxima etapa
  setTimeout(() => {
    currentStepKey.value = option.nextStep;
  }, 500);
}

function sendMessage() {
  if (!userInput.value.trim() || !currentStep.value?.allowInput) return;
  
  // Adicionar mensagem do usuário
  const userMessage = userInput.value.trim();
  currentMessages.value.push({
    type: 'sent',
    text: userMessage,
    time: getCurrentTime()
  });
  
  // Limpar input
  userInput.value = '';
  
  // Verificar se a mensagem corresponde a uma das opções
  const options = currentStep.value.options;
  let matchFound = false;
  let nextStep = '';
  
  // Tentar encontrar correspondência com opções disponíveis
  for (const option of options) {
    if (userMessage.toLowerCase().includes(option.text.toLowerCase())) {
      matchFound = true;
      nextStep = option.nextStep;
      break;
    }
  }
  
  // Se não encontrou correspondência, responder pedindo para escolher uma opção
  if (!matchFound) {
    setTimeout(() => {
      isTyping.value = true;
      
      setTimeout(() => {
        isTyping.value = false;
        currentMessages.value.push({
          type: 'received',
          text: chooseOption.value, // Usando a mensagem traduzida
          time: getCurrentTime()
        });
      }, 1500);
    }, 500);
  } else {
    // Se encontrou correspondência, avança para o próximo passo
    setTimeout(() => {
      currentStepKey.value = nextStep;
    }, 500);
  }
}

function restartDemo() {
  currentMessages.value = [];
  userInput.value = '';
  initializeDemo();
}

// Função melhorada de scroll para sempre manter visível a última mensagem
function scrollToBottom() {
  nextTick(() => {
    if (chatContainer.value) {
      // Garantir que o scroll seja aplicado após a renderização do DOM
      setTimeout(() => {
        const container = chatContainer.value;
        container.scrollTop = container.scrollHeight + 1000;
      }, 50);
    }
  });
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function formatMessage(text) {
  if (!text) return '';
  // Converter quebras de linha para HTML
  return text.replace(/\n/g, '<br>');
}
</script>

<style scoped>
.demo-chat-container {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  padding: 15px 0;
}

.chat-card {
  border-radius: 12px;
  overflow: hidden;
  height: auto; /* Altura aumentada de 600px para 680px */
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
}

.chat-header {
  padding: 12px 16px;
  background-color: #075E54;
  color: white;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 380px; /* Aumentado de 320px para 380px */
  max-height: 380px; /* Aumentado de 320px para 380px */
  background-color: #0D1418;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230FA558' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  display: flex;
  margin-bottom: 8px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.message-received {
  justify-content: flex-start;
}

.message-sent {
  justify-content: flex-end;
}

.message-bubble {
  padding: 10px 12px;
  border-radius: 8px;
  max-width: 80%;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
}

.message-received .message-bubble {
  background-color: #252C33;
  border-bottom-left-radius: 0;
  color: white;
}

.message-sent .message-bubble {
  background-color: #0FA558;
  border-bottom-right-radius: 0;
  color: white;
}

.message-text {
  font-size: 0.9rem;
  word-break: break-word;
  line-height: 1.4;
}

.message-time {
  font-size: 0.7rem;
  opacity: 0.7;
  text-align: right;
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.chat-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  justify-content: center;
  background-color: #1A1E23;
}

.option-button {
  margin: 6px; /* Aumentado de 4px para 6px */
  text-transform: none;
  height: auto;
  white-space: normal;
  text-align: center;
  line-height: 1.2;
  padding: 10px 18px; /* Aumentado de 8px 16px para 10px 18px */
  border-radius: 20px;
  transition: all 0.2s ease;
}

.option-button:hover {
  background-color: rgba(15, 165, 88, 0.1);
  transform: translateY(-2px);
}

.chat-input {
  padding: 16px; /* Aumentado de 12px para 16px */
  background-color: #1A1E23;
}

.message-input {
  border-radius: 24px !important;
  background-color: #252C33 !important;
  padding: 4px 0; /* Adicionando um pouco de padding vertical */
}

.v-text-field :deep(.v-field__field) {
  border-radius: 24px !important;
}

.v-text-field :deep(.v-field__outline) {
  color: transparent !important;
}

.send-button {
  background-color: transparent;
  transform: scale(1.2);
  margin-left: 12px; /* Aumentado de 8px para 12px para dar mais espaço */
}

.restart-container {
  display: flex;
  justify-content: center;
  padding: 10px 0; /* Aumentado de 6px para 10px */
  background-color: #1A1E23;
}

.trial-button-container {
  padding: 16px; /* Aumentado de 12px para 16px */
  background-color: #1A1E23;
}
</style>