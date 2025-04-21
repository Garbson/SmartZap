/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from '@/router';
import pinia from '@/stores';
import vuetify from './vuetify';

// Diretiva personalizada para animações de entrada ao scrollar
const scrollInDirective = {
  mounted(el) {
    // Função que verifica se o elemento está visível na tela
    const isElementInViewport = () => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight * 0.75) &&
        rect.bottom >= 0
      );
    };

    // Função para adicionar classe quando o elemento entra na viewport
    const handleScroll = () => {
      if (isElementInViewport()) {
        el.classList.add('scrolled-in');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Adicionar classe inicial
    el.classList.add('scroll-animation');
    
    // Verificar posição inicial
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Adicionar event listener para scroll
    window.addEventListener('scroll', handleScroll);
  }
};

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .directive('scrolls-in', scrollInDirective);
}
