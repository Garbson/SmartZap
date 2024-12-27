<template>
  <v-card
    class="pa-10 flex justify-center align-center items-center bg-primary"
    height="600px"
    elevation="0"
  >
    <v-row class="mt-md-15">
      <!-- Card do Texto -->
      <v-col md="6">
        <v-card
          class="bg-transparent"
          elevation="0"
          height="100%"
        >
          <p class="ml-md-3 text-h4 font-weight-bold">
            Transforme Seu <span class="text-secondary">WhatsApp</span> em uma Máquina de Vendas!
          </p>

          <v-card-text class="text-h6">
            Liberte seus superpoderes de vendas com o Walovii! Automatize processos, trabalhe de forma inteligente e alavancada, e conquiste resultados extraordinários. Menos esforço repetitivo, mais produtividade e vendas fechadas com a eficiência que só o <span class="text-secondary">SmartZap</span> traz para você!
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="rounded-xl bg-secondary animate-pulse-btn"
            >
              Quero Testar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Card do Vídeo -->
      <v-col md="6">
        <v-card
          class="bg-transparent flex justify-center align-center items-center"
          elevation="0"
          height="100%"
        >
          <div class="rounded-xl border border-gray-300 p-4">
            <img
              src="/teste.gif"
              alt="Descrição do GIF"
              width="80%"
              class="img-fluid"
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup></script>

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
