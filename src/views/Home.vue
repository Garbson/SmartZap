<template>
  <div>
    <BannerPrincipal />
    <SecaoRecursos />
    <SecaoFuncionalidades />
    <!-- <SecaoDepoimentos /> -->
    <SecaoIntegracoes />
    <SecaoPlanos />
    <SecaoFAQ />
  </div>
</template>

<script setup>
import BannerPrincipal from "../components/BannerPrincipal.vue";
// import SecaoDepoimentos from "../components/SecaoDepoimentos.vue";
import SecaoFAQ from "../components/SecaoFAQ.vue";
import SecaoFuncionalidades from "../components/SecaoFuncionalidades.vue";
import SecaoIntegracoes from "../components/SecaoIntegracoes.vue";
import SecaoPlanos from "../components/SecaoPlanos.vue";
import SecaoRecursos from "../components/SecaoRecursos.vue";
</script>