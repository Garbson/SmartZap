// Importa o Vue I18n
import { createI18n } from 'vue-i18n'

// Importa os arquivos de idioma separados
import en from './locales/en.js'
import es from './locales/es.js'
import pt from './locales/pt.js'

// Cria o objeto de mensagens
const messages = {
  en,
  pt,
  es
}

// Cria a instância do i18n
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  globalInjection: true, // Injeta o $t globalmente
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages, // Traduções
})

export default i18n
