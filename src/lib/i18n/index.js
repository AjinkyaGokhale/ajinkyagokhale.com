import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { translations } from './translations.js';
import { ui } from './ui.js';

// Merge ported content (translations.js) with the new redesign strings (ui.js).
const dict = {
  en: { ...translations.en, ...ui.en },
  de: { ...translations.de, ...ui.de }
};

const initial = browser ? localStorage.getItem('lang') || 'en' : 'en';

export const lang = writable(initial);

if (browser) {
  lang.subscribe((value) => {
    localStorage.setItem('lang', value);
    document.documentElement.lang = value;
  });
}

export function toggleLang() {
  lang.update((value) => (value === 'en' ? 'de' : 'en'));
}

// $t gives the active language dictionary.
export const t = derived(lang, ($lang) => dict[$lang]);
