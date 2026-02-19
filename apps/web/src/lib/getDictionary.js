// lib/getDictionary.js

export const getDictionary = async locale => {
  switch (locale) {
    case 'en':
      return import('../locales/en/common.json').then(res => res.default);
    case 'es':
      return import('../locales/es/common.json').then(res => res.default);
    default:
      return import('../locales/es/common.json').then(res => res.default);
  }
};
