<template>
  <v-app-bar
    app
    style="background: linear-gradient(to right, #313841, #0FA555);"
    dark
    :elevation="scrollPosition > 20 ? 4 : 0"
    class="navbar-transition"
    height="80"
  >
    <v-container>
      <v-row
        align="center"
        justify="space-between"
        class="pa-0"
      >
        <!-- Logo -->
        <v-col
          class="d-flex align-center"
          cols="6"
          md="3"
        >
          <div class="d-block">
            <img
              src="/logo.png"
              alt="SmartZap Logo"
              class="logo-hover"
              height="75"
            >
          </div>
        </v-col>

        <!-- Botão hambúrguer para telas pequenas -->
        <v-col
          cols="6"
          class="d-flex justify-end d-md-none"
        >
          <v-menu
            offset-y
            right
            transition="slide-y-transition"
          >
            <template #activator="{ props }">
              <v-btn
                icon
                v-bind="props"
                class="menu-btn"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list class="menu-mobile">
              <v-list-item
                v-for="(item, index) in navItems"
                :key="index"
              >
                <v-btn
                  block
                  text
                  color="primary"
                  :href="item.href"
                  class="nav-btn-mobile"
                  @click="scrollToSection(item.id)"
                >
                  {{ $t(item.title) }}
                </v-btn>
              </v-list-item>
              <v-divider />
              <v-list-item class="d-flex justify-center language-selector-mobile">
                <div
                  v-for="(lang, i) in languages"
                  :key="i"
                  class="language-btn"
                  :class="{ active: locale === lang.code }"
                  @click="changeLanguage(lang.code)"
                >
                  <img
                    :src="lang.flag"
                    :alt="lang.name"
                    height="24"
                    width="24"
                    class="flag-icon"
                  >
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <!-- Links para telas maiores -->
        <v-col
          class="d-none d-md-flex nav-links justify-center"
          md="6"
        >
          <v-btn
            v-for="(item, index) in navItems"
            :key="index"
            text
            color="white"
            class="nav-btn"
            :href="item.href"
            @click="scrollToSection(item.id)"
          >
            {{ $t(item.title) }}
          </v-btn>
        </v-col>

        <!-- Opções de tradução -->
        <v-col
          class="d-none d-md-flex justify-end"
          md="3"
        >
          <div class="translation-options">
            <div
              v-for="(lang, i) in languages"
              :key="i"
              class="language-btn"
              :class="{ active: locale === lang.code }"
              role="button"
              :aria-label="lang.ariaLabel"
              @click="changeLanguage(lang.code)"
            >
              <img
                :src="lang.flag"
                :alt="lang.name"
                height="24"
                width="24"
                class="flag-icon"
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const scrollPosition = ref(0);

// Itens de navegação simplificados
const navItems = [
  { id: 'recursos', href: '#recursos', title: 'navbar.resources' },
  { id: 'funcionalidades', href: '#funcionalidades', title: 'navbar.features' },
  { id: 'planos', href: '#planos', title: 'navbar.plans' },
  { id: 'integracoes', href: '#integracoes', title: 'navbar.integrations' },
  { id: 'faq', href: '#faq', title: 'navbar.faq' }
];

// Idiomas disponíveis
const languages = [
  { 
    code: 'en', 
    name: 'English', 
    ariaLabel: 'Change to English',
    flag: '/estados-unidos.png'
  },
  { 
    code: 'pt', 
    name: 'Português', 
    ariaLabel: 'Mudar para Português',
    flag: '/brasil.png'
  },
  { 
    code: 'es', 
    name: 'Español', 
    ariaLabel: 'Cambiar a Español',
    flag: '/espanha.png'
  }
];

// Função para alterar o idioma
const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('userLanguage', lang);
};

// Função para atualizar apenas a posição da barra de rolagem (para efeito de elevação)
const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY;
};

// Rola para a seção selecionada
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Compensar a altura do navbar fixo
    const navbarHeight = 80;
    const targetPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  // Verificar se existe um idioma salvo no localStorage
  const savedLanguage = localStorage.getItem('userLanguage');
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
  
  // Apenas o evento de rolagem para a elevação do navbar
  window.addEventListener("scroll", updateScrollPosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollPosition);
});
</script>

<style scoped>
.navbar-transition {
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.translation-options {
  display: flex;
  gap: 10px;
}

.language-btn {
  padding: 5px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.language-btn.active {
  background-color: rgba(43, 145, 56, 0.5);
  box-shadow: 0 0 10px rgba(15, 165, 88, 0.5);
  border: 2px solid white;
}

.language-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.flag-icon {
  display: block;
  object-fit: contain;
}

.nav-btn {
  font-weight: 500;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  opacity: 0.8;
  letter-spacing: 0.5px;
  padding: 0 16px;
  outline: none !important; /* Removendo o outline que causa a barra branca */
  user-select: none; /* Previne seleção de texto */
  -webkit-tap-highlight-color: transparent; /* Remove highlight em dispositivos móveis */
}

.nav-btn:hover, .nav-btn:active, .nav-btn:focus {
  opacity: 1;
  transform: translateY(-2px);
  background-color: rgba(15, 165, 88, 0.2);
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

/* Animação no clique */
.nav-btn:active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 4px;
  background-color: #0FA558;
  border-radius: 4px;
  animation: flash-animation 0.5s ease;
}

@keyframes flash-animation {
  0% { opacity: 0; width: 0; }
  50% { opacity: 1; width: 100%; }
  100% { opacity: 0.8; width: 70%; }
}

.menu-btn {
  transition: all 0.3s ease;
}

.menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.menu-mobile {
  background: linear-gradient(to right, #313841, #0FA555);
  border-radius: 8px;
  overflow: hidden;
  padding: 8px 0;
}

.logo-hover {
  transition: transform 0.3s ease;
  max-width: 100px;
  max-height: 75px;
  object-fit: contain;
}

.logo-hover:hover {
  transform: scale(1.05);
}

.language-selector-mobile {
  padding: 10px 0;
  gap: 10px;
}

/* Animação de pulsação para o botão de idioma ativo */
.language-btn.active {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(15, 165, 88, 0.7);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(15, 165, 88, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(15, 165, 88, 0);
  }
}

/* Animação para botões no menu mobile */
.nav-btn-mobile:active {
  background-color: rgba(15, 165, 88, 0.3) !important;
  transform: scale(0.98);
  transition: all 0.2s ease;
}
</style>