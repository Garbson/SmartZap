<template>
  <router-view />
  
  <!-- Botão flutuante de WhatsApp -->
  <a 
    href="https://wa.me/5511999999999" 
    target="_blank" 
    class="whatsapp-float"
    aria-label="Contate-nos pelo WhatsApp"
  >
    <div class="whatsapp-float-button">
      <v-icon
        size="x-large"
        color="white"
      >mdi-whatsapp</v-icon>
    </div>
    <span class="whatsapp-pulse" />
  </a>
</template>

<script setup>
// Mantemos apenas o botão flutuante de WhatsApp aqui, o resto vai para o layout
</script>

<style>
/* Estilo para a barra de rolagem */
::-webkit-scrollbar {
  width: 12px; /* Largura da barra de rolagem */
  height: 12px; /* Altura da barra de rolagem horizontal */
}

::-webkit-scrollbar-track {
  background: #313841; /* Cor do track da scrollbar */
}

::-webkit-scrollbar-thumb {
  background: #0FA558; /* Cor do thumb da scrollbar (usando a cor primary do Vuetify) */
  border-radius: 6px; /* Bordas arredondadas para o thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #0FA558; /* Cor ao passar o mouse */
}

/* Compatibilidade com navegadores que não usam -webkit- */
.scrollbar {
  scrollbar-color: #0FA558 #313841; /* Thumb e track */
  scrollbar-width: thin; /* Largura fina */
}

/* Botão flutuante de WhatsApp */
.whatsapp-float {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999;
  text-decoration: none;
}

.whatsapp-float-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
}

.whatsapp-float-button:hover {
  transform: scale(1.1);
  background-color: #20c065;
}

/* Animação de pulso */
.whatsapp-pulse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #25D366;
  opacity: 0.6;
  transform-origin: center;
  animation: pulse 1.5s infinite ease-out;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  70% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
