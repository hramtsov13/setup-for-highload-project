import { createI18n, LocaleMessages } from 'vue-i18n';

type messageType = {
  [key: string]: string;
};

interface LocalesDataInterface {
  messages: LocaleMessages<messageType>;
}

const data: LocalesDataInterface = {
  messages: {
    'en-US': {
      welcome: 'Welcome: this message is localized in English',
    },
    'it-IT': {
      welcome: 'Benvenuti: this message is localized in Italian',
    },
    'fr-FR': {
      welcome: 'Bienvenue: this message is localized in French',
    },
    'es-ES': {
      welcome: 'Bienvenido: this message is localized in Spanish',
    },
    'ru-RU': {
      welcome: 'Здравствуйте: this message is localized in Russian',
    },
  },
};

export const i18n = createI18n({
  locale: 'ru-RU',
  fallbackLocale: 'en-US',
  messages: data.messages,
});
