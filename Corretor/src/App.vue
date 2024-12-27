<template>
  <v-app>
    <NavbarComponent />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CallToAction />
    <tutorial />
    <integracoes />
    <planos />
    <suporte />
    <footerFinal />
  </v-app>
</template>

<script setup>
import CallToAction from "./components/CallToAction.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import footerFinal from "./components/footerFinal.vue";
import HeroSection from "./components/HeroSection.vue";
import integracoes from "./components/integracoes.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import planos from "./components/planos.vue";
import suporte from "./components/suporte.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import tutorial from "./components/tutorial.vue";
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
  background: #0FA534; /* Cor do thumb da scrollbar (usando a cor primary do Vuetify) */
  border-radius: 6px; /* Bordas arredondadas para o thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #0fa534; /* Cor ao passar o mouse */
}

/* Compatibilidade com navegadores que não usam -webkit- */
.scrollbar {
  scrollbar-color: #0fa534 #313841; /* Thumb e track */
  scrollbar-width: thin; /* Largura fina */
}
</style>
