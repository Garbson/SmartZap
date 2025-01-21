<template>
  <v-app>
    <NavbarComponent />
    <FeaturesSection />
    <midleText />
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
import midleText from "./components/midleText.vue";
import CallToAction from "/src/components/CallToAction.vue";
import FeaturesSection from "/src/components/FeaturesSection.vue";
import footerFinal from "/src/components/footerFinal.vue";
import integracoes from "/src/components/integracoes.vue";
import NavbarComponent from "/src/components/NavbarComponent.vue";
import planos from "/src/components/planos.vue";
import suporte from "/src/components/suporte.vue";
import TestimonialsSection from "/src/components/TestimonialsSection.vue";
import tutorial from "/src/components/tutorial.vue";
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
</style>
