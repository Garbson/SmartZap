<template>
  <v-card
    class="pa-10 flex justify-center align-center items-center bg-primary"
    height="auto"
    elevation="0"
  >
    <v-row class="justify-center">
      <v-col
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

        <!-- Video/GIF -->
        <div class="rounded-xl border border-gray-300 p-4 mb-6 text-center">
          <img
            src="/teste.gif"
            alt="Demonstração do SmartZap"
            width="80%"
            class="img-fluid"
          >
        </div>
        
        <!-- Texto descritivo -->
        <v-card-text
          class="text-h6 text-center mb-4"
          v-html="$t('bannerPrincipal.description').replace('SmartZap', `<span class='text-secondary'>SmartZap</span>`)"
        />
        
        <!-- Botão -->
        <v-btn
          class="rounded-xl bg-secondary animate-pulse-btn mb-6"
          size="large"
          
        >
          {{ $t('bannerPrincipal.buttonText') }}
        </v-btn>
        
        <!-- Texto adicional abaixo do vídeo -->
        <v-card-text class="text-center text-subtitle-1">
          {{ $t('bannerPrincipal.videoCaption') }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
</script>

<style scoped>
/* Animação para o botão */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    border-radius: 24px;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(155, 230, 171, 0.5);
    border-radius: 24px;
  }
}

.animate-pulse-btn {
  animation: pulse 1.5s infinite;
  transition: transform 0.3s ease;
  border-radius: 24px;
}

.animate-pulse-btn:hover {
  transform: scale(1.15);
  border-radius: 24px;
}
</style>