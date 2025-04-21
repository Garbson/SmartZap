<template>
  <v-app>
    <!-- Menu de Navegação fixo no topo -->
    <MenuNavegacao />
    
    <!-- Conteúdo principal da página com margem para o navbar -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Rodapé da página -->
    <Rodape />
  </v-app>
</template>

<script setup>
import MenuNavegacao from '../components/MenuNavegacao.vue';
import Rodape from '../components/Rodape.vue';
</script>
