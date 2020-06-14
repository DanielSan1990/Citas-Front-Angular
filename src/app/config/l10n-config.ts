import { L10nConfig, L10nLoader } from 'angular-l10n';

import { i18nAsset } from './i18n';

export const l10nConfig: L10nConfig = {
    format: 'language-region',
    providers: [
        { name: 'app', asset: i18nAsset }
    ],
    cache: true,
    keySeparator: '.',
    defaultLocale: { language: 'es-ES'},
    schema: [
      { locale: { language: 'es-ES' }, dir: 'ltr', text: 'España' },
        { locale: { language: 'en-GB' }, dir: 'ltr', text: 'Great Britain' }
    ]
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
    return () => l10nLoader.init();
}
